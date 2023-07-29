# React + Vite

1. Chapter-3

A) Designing Footer, Homepage, and Call to Action

1)Footer=>
a) container
b)container-fluid
c)height
d)style

B)Designing Footer Section Heading - Part 2

    1)=>bootstrap 3 sections rows and columns
    2)grid systems
    3)className="row"
    4) padding top styling in footer with text center and padding top

C) Designing Footer Quick Links - Part 3

    1) quick links working now one below another achieving by div and anchor tag

    2)with the use of text-coloName we use the color of the link
    3)now we focused in the break the row and sepearted into a particular row wise
     4) usifflex box for alignment
     5) we want the child element should be one below another so we used column flex
    6) justify content center
    7)justify with flex dir row horizontally works but allign elemnt work with column verical
    8) justify elemtn act as vertical and allign element work with horizontal
    9) d-flex flex-row border border-danger
    10 no difference
    11)justify-content-evenly-- horizontally but allign elemnt for vertically
    12) align-items-evenly get rid of as it is doing the same work of d-flex-column as align element is same fpr d-flex-column

D) Designing Footer Newsletter - Part 4
1)style={{minHeight:'7rem'}}
used this for the height of container for to put in the middle
2)flex-row-- align-elements
3)flex-column justify-content

E) Designing Footer, Homepage, and Call to Action

    1)completed the footer section

F) Designing Footer, Homepage, and Call to Action

A)
1)We made dummy section to upgrade later just for the sake of create things

G) Designing Homepage Hero Section Slider

1. we make the slider from the bootstrapt slider and take the with copy image address of images and put into the src
2. we fix the height of the image accordingly
   3)we made the card of 3 column wise
3. we copy the card from the bootstarp.

H)Designing Homepage Latest Post Section 1) we use the d-grid for broader the "Read More " Button in the className 2) make the copy and paste in the latest posts also

I) Designing Homepage Portfolio Section 1) we use the gutters for "Our portfolio" and put the image there and makin the mb-2

J)Section- Add Home Link to the NavBar
1)we add the home link in home.jsx

k)Designing Call to Action section

        1. We made asection for our view post above "OUR portfolio"
        2. we made a section and div which has icon and dflex and justify content center and align element center along with column

2. Chapter-4- Working on All Posts and Post Detail with REST API Integration
   A).Create All Post Page and Link to NavBar Navigation
   a)add the post section for geting the posts data first make a navlink in navbar after Home
   b. make a route with path /post

   B)Designing All Posts Page
   a)Copy the section of feature post and paste in feature post page
   b) but we want to make the data from server
   C)Understanding REST API for Getting Post Data
   a)hard coded data backend app from server-php,python .. and connecting with database
   b) we make the call and ask all the data in the form of json give data inthe form of key value pair and show on our page
   c)we will use ready made data server- 'jsonplaceholder typicode'

   D) React Hooks useState and useEffect to Call Posts API and Store Data on Page
   a)fetch api from js pure js
   b)use the useState and useEffect we fetch the data and dispaly on the fronten in console
   c)now we remove the cards which we maually set with the fetch data
   E)Show Posts Data on UI by Looping All Data
   a)we use the usestate for get the post the and put themap function of single card layout using the map function and put the whole difision uniquely of key props by index

   F)
   a)Showing Loading Icon While the data is fetching from the rest api
   we us the boolean useStae of initially false for spiner the data of fetch api using call back to eshowing the daa is loading
   b) we use the ternary function in react in jsx markup by making the division in the spner div so that we put it into center

   G) Adding API Base URL to a Config File and Using It Everywhere
   a)add the folder config and make a file constant and amke a api_base_url and put the value of etch url link and then import the constant config file in allposts and change the fetch link with the api_base_url and the code is looking same just to make the link callable easier multiple times

   H)Dynamic Routing Passing Data from One Component to Another
   a){/_ ${post.id} it in the data fetched data of posts we just set the post id when we poin to the cursor over read more button same with ${post.userId} it is also the in the fated data the loop pointer post of total in posts _/}
   b) <Route exact path="/posts/:postId/:userId" element={<PostDetail/>}></Route>
   we make the seperate of files of each fetched data of loop in the routed link of PostDetail.jsx we put
   postId-postId is the id of the post of number like counting we aslo change postId with id
   userId-is the user of user in the fetched data

   I) Get Post and User Data from REST API Call
   a)we chech the post details in screen
   b) now with the help of axios we fetch the users data and post data as well

   J)Design Layout of post detail page
   a)we make the card in row in classname containe div side by side

   k)Destructuring and Setting Post and User Data from Response to State Variables
   a) TO BE CONTINUED..........
