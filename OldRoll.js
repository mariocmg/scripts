// OldRoll - forzar estado de compra en /buy
// Intercepta request a oldrollservice.careyourhrtsoftware.com

let body = $request.body;

if (body) {
  // El body viene como multipart/form-data
  // Buscamos el JSON dentro del campo "data"
  try {
    // Extraer el JSON del form-data
    let jsonMatch = body.match(/\{[\s\S]*"userId"[\s\S]*\}/);
    if (jsonMatch) {
      let data = JSON.parse(jsonMatch[0]);

      // Forzar todos los flags de compra
      data.yearly_subscribe = 1;
      data.monthly_subscribe = 1;
      data.onetime_purchase = 1;
      data.bought = 1;
      data.credit_purchase = 1;
      data.sum = 1;
      data.save = 1;

      let newJson = JSON.stringify(data);

      // Reconstruir el multipart manteniendo el boundary
      let boundaryMatch = body.match(/--alamofire\.boundary\.[a-f0-9]+/);
      let boundary = boundaryMatch ? boundaryMatch[0] : "--alamofire.boundary.fixed";

      body = `${boundary}\r\nContent-Disposition: form-data; name="data"\r\n\r\n${newJson}\r\n${boundary}--\r\n`;
    }
  } catch (e) {
    console.log("OldRoll parse error: " + e);
  }
}

$done({ body });
