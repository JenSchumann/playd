# **Playd**

### **Live site:**
https://playdd.herokuapp.com/

#### **About:**
Playd is a type of portfolio site to display Bootstrap 4 skills, share some insight about who I am & what makes me tick, & share some simple frontend javscript games as I continue to build my skills.

#### **Technology Used:**
 - HTML5, CSS, JavaScript, JQuery, Express, NodeJS, Bootstrap 4, Trello

#### **Web Site Design:**
The design of this site is inspired by learning acquired in a Udemy Class taught by Laurence Svekis which I took because I wanted to gain a deeper understanding of how to work with the Bootstrap 4 framework.

#### **Resources:**
 - Font Awesome: https://fontawesome.com/v4.7.0/icons/
 - PEXELS: https://www.pexels.com/
 - Color palette: https://coolors.co/export/pdf/052f5f-005377-06a77d-d5c67a-f1a208
 - personal photo archive from teaching experience
 - personal research archive from grad studies
 - Email router: https://formspree.io/
 - Email receiver: https://www.mailinator.com/faq.jsp

#### **Task List:**
- [ ] add links to the Github repo & Heroku site for projects on the "In Progress" page
- [x] typography updates
- [x] Kingly content in all modals
- [x] update readme
- [x] add list-group-item-action class to accordion buttons on about page
- [ ] photoshop edit pics below "our story" on about page to be the same size
- [x] set footer to collapsed state when page loads
- [ ] add a badge pill to the congrats message for HiLo winners
- [x] pinterest link to my game board
- [x] link to my youtube account on the footer  
- [ ] incorporate BGG API for content in about page: https://boardgamegeek.com/wiki/page/BGG_XML_API
- [ ] optimize code to make it DRY
- [ ] update HiLo game logic to include option for same card guess (or whether if the same card comes up it would not count as a lost life)
- [ ] update privacy, terms of service, and legal links in footer to include active links w/authentic content
- [ ] add caption to large photo on about page

#### **BGG API Notes:**
 BGG API Info: https://boardgamegeek.com/wiki/page/BGG_XML_API
 to get an exact result:
 http://www.boardgamegeek.com/xmlapi/search?search=Crossbows%20and%20Catapults&exact=1
 to get list of results w/search terms:
 http://www.boardgamegeek.com/xmlapi/search?search=The%20Resistance
 <!-- 214319 -->
/xmlapi/collection/<username>

could tie my BGG user info on about page:
http://www.boardgamegeek.com/xmlapi/collection/JenSchumann
41114
http://www.boardgamegeek.com/xmlapi/boardgame/165056
224037
