trying out node.js 

setting up a server using createServer first

using req and res to detect the type of input.

require http to create the server 

res.setheader to set the type of header i.e either a text or a html page

for a html page use fs.readfile and res.end(data)

setting status code of each pages using res.statusCode

trying redirect by setting type of header as location, 'link' to where to redirect 



using express

const app=express()

app.get for res and req object  - to give output for the webpage searched

res.sendFile to seoond html page it takes the root directory as well as html page 

to redirect use app.redirect


for error use app.use this runs only if the line of execution reaches this line it runs for every response. 
it should be placed at the end of the file. it has two objects req and res
