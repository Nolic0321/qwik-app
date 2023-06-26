import {component$, useSignal, useStylesScoped$, useTask$} from "@builder.io/qwik";
import {Form, routeAction$, routeLoader$, zod$, z, server$} from "@builder.io/qwik-city";
import STYLES from "./index.css?inline";


export const useDadJoke = routeLoader$(async () => {
	const response = await fetch("https://icanhazdadjoke.com/", {
		headers: {
			Accept: "application/json",
		},
	});
	const data = await response.json() as {
		id: string;
		status: number;
		joke: string;
	};
	return data;
});

export const useJokeVoteAction = routeAction$(async (props) => {
		console.log("VOTE", props);
	},
	zod$({
		jokeID: z.string().nonempty(),
		name: z.string().nonempty(),
	})
);
export default component$(() => {
	useStylesScoped$(STYLES);
	const dadJokeSignal = useDadJoke();
	const favoriteJokeAction = useJokeVoteAction();
	const isFavoriteSignal = useSignal(false);
	useTask$(({track})=>{
		track(()=> isFavoriteSignal.value);
		console.log('FAVORITE (isomorphic)', isFavoriteSignal.value);
		server$(async ()=>{
			console.log('FAVORITE (server)', isFavoriteSignal.value);
		})();
	});

	return (<section class="section bright">
		<p>{dadJokeSignal.value.joke}</p>
		<Form action={favoriteJokeAction}>
			<input type="hidden" name="jokeID" value={dadJokeSignal.value.id}/>
			<button name="vote" value="up">👍</button>
			<button name="vote" value="down">👎</button>
		</Form>

		<button
			onClick$={()=> {
				isFavoriteSignal.value = !isFavoriteSignal.value;
			}}>
			{isFavoriteSignal.value?'❤️':'🤍'}
		</button>
	</section>);
});
