function actionRequest(url: string, method: 'GET' | 'POST') {

}
type detailsRequest = {
  url: string,
  method: 'GET' | 'POST'
}
let req: detailsRequest = { url: 'https://www.google.com.br', method: 'GET' }
actionRequest(req.url, req.method)

/* ERROR 
Argument of type 'string' is not assignable to parameter of type '"GET" | "POST 

SOLUÇÃO = Fazer novamente uma tipação
*/