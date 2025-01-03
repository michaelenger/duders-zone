import { error, redirect } from '@sveltejs/kit'
import { dataStore } from '$lib/data'
import type { PageLoad } from './$types'

export const load = (({ params }) => {
	const show = dataStore.getShowById(params.show)

	if (show === null) throw error(404, 'Not found')

	const videos = dataStore.getVideosForShow(show)
	if (videos.length === 0) throw error(404, 'Not found')

	const video = videos[0]

	redirect(302, `/shows/${show.id}/${video.id}`)
}) satisfies PageLoad
