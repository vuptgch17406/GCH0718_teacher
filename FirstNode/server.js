var http = require('http')
var fs = require('fs')

var server = http.createServer((req,res)=>{
    if(req.url =='/' || req.url== 'index'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<body>')
        res.write('<h1 style="color:red">Home Page</h1>')
        res.write('<a href="/student">Go To Student</a>')
        res.write('</body>')
        res.end('</html')
    }else if(req.url=='/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<body>')
        res.write('<h1 style="color:green">Student Page</h1>')
        var data = fs.readFileSync('data.txt', 'utf8');
        var reg = /[;,\s]/
        var ds = data.split(reg);
        res.write('<ul>');
        for(i=0;i<ds.length;i++){
            res.write('<li>' + ds[i] + '</li>');
        }
        res.write('</ul>');
        
        res.write(data);
        res.write('<a href="/">Go To Home</a>')
        res.write('</body>')
        res.end('</html')
    }else{
        res.write('<html>');
        res.write('<body>')
        res.write('<h1 style="color:blue">File khong ton tai!</h1>')
        res.write('<a href="/student">Go To Student</a>')
        res.write('<br>')
        res.write('<a href="/">Go To Home</a>')
        res.write('</body>')
        res.end('</html')
    }
})

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log("Server is running on " + PORT) 