import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const key = process.env.RAPIDAPI_KEY
const host = process.env.RAPIDAPI_HOST
const endpoint = process.env.RAPIDAPI_ENDPOINT
const profileParam = process.env.RAPIDAPI_PROFILE_PARAM || 'linkedin_url'
const profileUrl = process.env.LINKEDIN_PROFILE_URL || 'https://www.linkedin.com/in/kushan-esala/'

if (!key || !host || !endpoint) {
  throw new Error('Set RAPIDAPI_KEY, RAPIDAPI_HOST, and RAPIDAPI_ENDPOINT before syncing LinkedIn.')
}

const url = new URL(endpoint)
url.searchParams.set(profileParam, profileUrl)

if (host === 'fresh-linkedin-profile-data.p.rapidapi.com') {
  url.searchParams.set('include_skills', 'true')
  url.searchParams.set('include_certifications', 'true')
}

const response = await fetch(url, {
  headers: {
    'x-rapidapi-key': key,
    'x-rapidapi-host': host,
  },
})

if (!response.ok) {
  const detail = await response.text()
  throw new Error(`LinkedIn sync failed (${response.status}): ${detail}`)
}

const payload = await response.json()
const data = payload.data || payload.profile || payload
const rawExperience = data.experiences || data.positions || data.experience || []

const normalizedExperience = rawExperience
  .map((item) => ({
    title: item.title || item.position || item.job_title || 'Role',
    company: item.company || item.company_name || item.companyName || 'Company',
    type: item.employment_type || item.employmentType || 'Professional experience',
    location: typeof item.location === 'string' ? item.location : item.location?.fullLocation || null,
    workMode: item.workplace_type || item.workplaceType || item.location_type || null,
    period: item.date_range || item.duration || [item.start_date, item.end_date || 'Present'].filter(Boolean).join(' - '),
    current: !item.end_date || /present/i.test(item.date_range || item.duration || ''),
    highlights: (Array.isArray(item.description) ? item.description : [item.description])
      .filter(Boolean)
      .flatMap((entry) => String(entry).split(/\n|•/))
      .map((entry) => entry.trim())
      .filter(Boolean),
  }))
  .filter((item) => item.title && item.company)

const normalized = {
  syncedAt: new Date().toISOString(),
  source: profileUrl,
  profile: {
    role: data.headline || data.job_title || data.title || null,
    company: data.company || data.current_company || data.companyName || null,
    location: typeof data.location === 'string' ? data.location : data.location?.fullLocation || null,
    summary: data.about || data.summary || null,
  },
  experience: normalizedExperience,
}

const output = path.resolve('src/data/linkedin.json')
await fs.writeFile(output, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8')
console.log(`LinkedIn profile synced to ${output}`)
