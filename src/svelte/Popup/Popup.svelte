<script>
	import {
		Volume2Icon,
		ClockIcon,
		HelpCircleIcon,
	} from "svelte-feather-icons"
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	import ToolButton from "./ToolButton/ToolButton.svelte"
	import Recents from "./Recents/Recents.svelte"
	import About from "./About/About.svelte"

	let tabs = [
	  {
		icon: 'access_time',
		label: 'Recents',
	  },
	  {
		icon: 'near_me',
		label: 'Nearby',
	  },
	  {
		icon: 'favorite',
		label: 'Favorites',
	  },
	];
	let active = tabs[0];

	const AppPages = {
		listen: "Listen",
		history: "History",
		info: "Info",
	}
	let selectedTab = 0
</script>

<!-- <Button on:click={() => clicked++} variant="raised">

<Label>Raised</Label> <VolumeIcon size="2x"></VolumeIcon>
</Button> -->

<!-- <TabContent pills on:tab={(e) => (selectedTab = e.detail)}>

<TabPane tabId="listen" tab="Listen" active>

<h2>Listen</h2>

<VolumeIcon size="2em" class="orange" />

<ToolButton />

</TabPane>

<TabPane tabId="recents" tab="Recents">

<h2>Recents</h2>

<Recents {viewport}{contents}/>

</TabPane>

<TabPane tabId="info" tab="Info">

</TabPane>
</TabContent> -->
<div>
	<TabBar {tabs} let:tab bind:active>
	  <Tab {tab}>
		<Icon class="material-icons">{tab.icon}</Icon>
		<Label>{tab.label}</Label>
	  </Tab>
	</TabBar>
  </div>



<style>
	:global(.red) {
		color: red;
	}

	:global(.orange) {
		color: orange;
	}

	:root {
		height: 400px;
		width: 250px;
		padding-inline: 0.5em;
	}

	/*=======scrollbar===*/
	::webkit-scrollbar {
		width: 7px;
	}

	::webkit-scrollbar-button {
		background-color: #444857;
		height: 0.5em;
	}

	::webkit-scrollbar-corner {
		background-color: #aaa;
	}

	::webkit-scrollbar-thumb {
		background-color: #aaa;
		opacity: 1;
		transition: background-color 300ms
			cubic-bezier(0.785, 0.135, 0.15, 0.86);

		border-radius: 10px;
	}

	::webkit-scrollbar-thumb:hover {
		background-color: #999;
	}

	::webkit-scrollbar-thumb:active {
		background-color: #7e7e7e;
	}
</style>
