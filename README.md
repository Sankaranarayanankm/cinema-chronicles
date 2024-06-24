**Learning from building Cinema Chronicles**

to make letters to uppercase using css use text-transform:uppercase;
to add space between letters use letter-spacing:3px like that 
to increase line height use line-height:3px; 

to center a element we can give margin-right:auto and margin-left:auto

NOTE:

when we hover over a parent then we need make one of its child visible for that what we can do is add display none to the child first 
then add this 
.parentElement:hover > childElement{
display:inline;
}
what does is what we hover over the parentElement target the child element and then give display property 

BEM=> block element Modifier

examples of modifiers are active class ....
how we name modifiers is that after the regular name we add two hyphens(--) for that 
e.g. header__icon--active

**hide scrollbar**
to hide the scrollbar that we get by using overflow-x:scroll (in the header class)
what we can do is 
for chrome and safari browser 
.header::-webkit-scrollbar{
display:none;
}
and for firebox what we can do is inside the header css add scrollbar-width:none 
and for internet explorer inside the -ms-overflow-style:none
NOTE we need to add all 3 while developing because our users can use any of the browsers

**while adding image**
always add object-fit contain when we are adding images inside the div


**how to get responsiveness to result page**
add these classes to the main div of the result page 
.results{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


**HOW TO CREATE INSTANCE OF AXIOS**
in the axios.js file which we created 

const instance=axios.create({
baseURL:'add the baseURL of website here'
{)
export default instance

ERROR 204 MEANS => your request is correct but there is no data to send back

for adding images we need to find the base url and then append the it before the image url that we get from each movie object

**HOW TO TRUNCATE(ADDING ... IF THE PARA OR LINE IS TOO LONG)1**
install =>npm install react-text-truncate
then import TextTruncate from 'reat-text-truncate'
then render TextTruncate like this 
<TextTruncate line={1} element='p' truncateTex='...' text={movie.overview} />

to add the read more functionality add textTruncateChild property 
it takes an a tag.
ie textTruncateChild={<a href='#'>Read n</a>}


**ADDING ANIMATION TO RERENDERING LISTS**
for that we use REACT FLIP MOVE
