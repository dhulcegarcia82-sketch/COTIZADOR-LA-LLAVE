// Cambia este número usando código de país y solo dígitos.
const NUMERO_WHATSAPP = "51999999999";
// Lista de productos editable: rendimiento es m², salvo canaleta que son metros lineales.
const PRODUCTOS = [
 {nombre:"Impermeabilizante para techos (galón)",unidad:"galón",rendimiento:4,precio:65,regla:"siempre"},
 {nombre:"Sellador para grietas (tubo)",unidad:"tubo",rendimiento:15,precio:18,regla:"siempre"},
 {nombre:"Canaleta de PVC (tramo de 3 m)",unidad:"tramo",rendimiento:3,precio:32,regla:"canaleta"},
 {nombre:"Cinta de refuerzo (rollo de 10 m)",unidad:"rollo",rendimiento:20,precio:28,regla:"calamina"}
];
// Convierte decimales con coma o punto; campos inválidos se vuelven NaN.
function numero(texto){const limpio=texto.trim().replace(",",".");return limpio&&/^[0-9]+(\.[0-9]+)?$/.test(limpio)?Number(limpio):NaN}
function soles(n){return `S/ ${n.toFixed(2)}`}
// Valida, calcula cantidades redondeadas hacia arriba y pinta el resumen.
document.querySelector("#form").addEventListener("submit",e=>{
 e.preventDefault();const area=numero(document.querySelector("#area").value),error=document.querySelector("#error"),resultado=document.querySelector("#result");
 if(!Number.isFinite(area)||area<=0){error.hidden=false;resultado.hidden=true;document.querySelector("#area").focus();return}error.hidden=true;
 const canal=numero(document.querySelector("#gutter").value),tipo=document.querySelector("#roof").value,lista=[];let total=0;
 PRODUCTOS.forEach(p=>{if(p.regla==="canaleta"&&(!Number.isFinite(canal)||canal<=0))return;if(p.regla==="calamina"&&tipo!=="calamina")return;const base=p.regla==="canaleta"?canal:area,cantidad=Math.ceil(base/p.rendimiento),subtotal=cantidad*p.precio;total+=subtotal;lista.push({...p,cantidad,subtotal})});
 const tbody=document.querySelector("#rows");tbody.replaceChildren();lista.forEach(p=>{const tr=document.createElement("tr");[p.nombre,`${p.cantidad} ${p.unidad}${p.cantidad===1?"":"s"}`,soles(p.precio),soles(p.subtotal)].forEach(v=>{const td=document.createElement("td");td.textContent=v;tr.append(td)});tbody.append(tr)});
 const nombre=tipo==="calamina"?"Calamina":"Concreto";document.querySelector("#detail").textContent=`Para ${area} m² de techo de ${nombre.toLowerCase()}.`;document.querySelector("#total").textContent=soles(total);
 // Prepara el texto pedido y lo codifica para WhatsApp.
 const productos=lista.map(p=>`- ${p.nombre}: ${p.cantidad} ${p.unidad}${p.cantidad===1?"":"s"}`).join("\n"),mensaje=`Hola Jorge, quiero mi Kit anti lluvias:\n- m²: ${area}\n- Tipo de techo: ${nombre}\n${productos}\n- Total: ${soles(total)}`;document.querySelector("#whatsapp").href=`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;document.querySelector("#whatsapp").target="_blank";document.querySelector("#whatsapp").rel="noopener noreferrer";resultado.hidden=false
});
