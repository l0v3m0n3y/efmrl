class efmrl{
    constructor(){
        this.api = "https://www.efmrl.link/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async short_url(url){
        let req=await fetch(`${this.api}/new`,{method:"POST",body:JSON.stringify({"longUrl":url}),headers: this.headers});
        return await req.json();
    }
}
module.exports = {efmrl};