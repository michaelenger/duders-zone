<script lang="ts">
	import { page } from '$app/stores'
	import VideoEmbed from '$lib/components/VideoEmbed.svelte'
	import VideoList from '$lib/components/VideoList.svelte'
	import type { PageData } from './$types'

	interface Props {
		data: PageData
	}

	const { data }: Props = $props()
</script>

<h1 class="sr-only">{data.show.title}</h1>

<section>
	<VideoEmbed video={data.video} />
</section>

<section class="container videos">
	<VideoList
		videos={data.videos}
		currentVideo={data.video}
		title={data.show.title}
		perPage={24}
		pageNumber={data.pageNumber}
	/>
</section>

<svelte:head>
	<meta
		property="og:url"
		content="https://duders.zone/videos/{data.video.show}/{data.video.id}"
	/>
	<meta property="og:type" content="video.other" />
	<meta property="og:title" content={data.video.title} />
	<meta property="og:description" content={data.video.description} />
	<meta
		property="og:image"
		content={data.video.thumbnail || 'https://duders.zone/assets/default.jpg'}
	/>
	<meta property="og:site_name" content="Duders Zone" />
	<title>{data.video.title} - Duders Zone</title>
	<meta name="description" content={data.video.description} />
</svelte:head>

<style>
	.videos {
		margin-bottom: var(--spacing);
		margin-top: var(--spacing);
	}
</style>
