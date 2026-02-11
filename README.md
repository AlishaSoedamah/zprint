# sprint 0

## Workshop van Cyd
4.2.2026

- View transitions met 
```startViewTransition```
startViewTransition kan worden gebruikt om een transition/animatie te maken op dezelfde pagina of tussen 2 pagina's.

View transitions maken een snapshot van de oude en nieuwe staat van een website en animeren tussen deze om zo een transtion te maken.

- Scroll-driven animations met 
```animation-timeline: view();```
animation-timeline kan worden gebruikt om animaties een tijdlijn te geven tijdens het scrollen.
<b>MDN Docs</b>
``` The animation-timeline property can be used to set a named or anonymous scroll progress or view progress timeline. Alternatively, it can be used to explicitly set the default time-based document timeline to control the progress of an element's animation or to have no timeline at all, in which case the element does not animate. ```

## Weekly nerd - Kilian Valkhof
- Gebruik minder sterke talen het meest

## log
3.2.26
Kick-off en de opdracht van de minor

4.2.26
Workshop van Cyd over scroll animations en same page transitions

### Week 1
Deze week heb ik:
- Het design van de website gemaakt
- Er is nu een live linkje naar de website.
- basis html/css van de website opgezet.

deze code gebruikt om de pagina titel te veranderen als je de website verlaat:

```
document.addEventListener("visibilitychange", function () {
   if (document.hidden) {
		document.title = "Kom terug!!!!!";
   } else {
		document.title = originalTitle;
   }
  });
  ```

9.2.26
Extra eis, gewerkt aan een theme toevoegen en meer mensen fetchen uit de FDND api.
Deze keer hebben we een forEach gebruikt om over alle mensen heen te lopen.

11.2.26
Code review -> laatste loodjes

### Week 2
```
@keyframes move {
	from {
		top: 15%;
		z-index: 0;
	}
	to {
		z-index: 4;
		top: 55%;
	}
}
```

![goals minor](img/zindex.gif)
z-index op de leerdoelen ziet er niet uit dus die heb ik weggehaald

Filter 
```

async function fetchEveryone()
{
	const btns = document.querySelectorAll("button");

	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			btns.forEach(btn => btn.classList.remove("on"));
			btn.classList.add("on");
			if (btn.id == "alle")
			{
				fetcher("/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[fav_animal][_nempty]");
			}
			else
			{
				fetcher(`/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[fav_animal]=${btn.id}`);
			}
		});
	});
}
```

12.2.26
Werk opleveren

animation-timeline:
[MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline#:~:text=view%20progress%20timeline-,The%20animation%2Dtimeline%20property%20of%20the%20element%20to%20animate%20is,of%20its%20nearest%20parent%20scroller.&text=All%20animation%20timelines%20can%20be%20removed%20by%20selecting%20a%20value%20of%20none%20.)
Title change on page change: https://dev.to/pwnkdm/fun-with-javascript-changing-page-titles-dynamically-2gcg
Voor de hover over de film container: https://www.w3schools.com/howto/howto_css_display_element_hover.asp
Animaties voor de imgs van de dieren: https://cydstumpel.github.io/minor-web-sprint-0/#/2
Theme switch: https://codepen.io/shooft/pen/QwEBNVx
https://medium.com/@ilearnbydoing/display-current-year-in-website-footer-e3f974a9dbc8

-- filter maken
button: https://dev.to/nicm42/multiple-buttons-looking-like-theyre-staying-pressed-one-at-a-time-4bbb
