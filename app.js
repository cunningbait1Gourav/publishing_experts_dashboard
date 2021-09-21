class sales
{
	constructor(
		name,
		nob,
		desc,
		saleAmazon,
		Royality,
		month,
    img,
		)
	{
		this.name=name;
		this.nob=nob;
		this.desc=desc;
		this.saleAmazon=saleAmazon;
		this.Royality=Royality;
		this.month=month;
    this.img=img
	}
}
const cstm =[];
cstm[0] = new sales("cstm1","abcd","this is one of the worlds best books",12,3,"August","cover.png")
cstm[1]= new sales("cstm2","efgh","this is one of the worlds best books",12,4,"August","cover.png")

const button= document.querySelector("#btn1");
const body= document.querySelector("section");

const NameOfBook= document.querySelector("#NameOfBook").value;
  function show(Name)
    {
    body.innerHTML=`  <div class="row">

       <div class="r">

       <div class="card" style="width: 18rem;">
  <img src="./${Name.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">Sale in ${Name.month}</h1>
    <h5 class="card-title">${Name.nob}</h5>
    <p class="card-text">${Name.desc}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Sale by Amazon</strong><br>${Name.saleAmazon}</li>
    <li class="list-group-item"><strong>Royality per copy</strong><br>${Name.Royality}</li>
    <li class="list-group-item"><strong>Total royality</strong><br>${Name.saleAmazon*Name.Royality}</li>
  </ul>
</div>
       </div>`}
       function check(item)
       {
        const Name = document.querySelector("#Name").value;
       	if(item.name == Name)
          {
          	show(item);
          }
        else
        	{
        		console.log("skipped"+item.name)
        	}
       }
       button.addEventListener('click',()=>
        {
        	cstm.forEach(check)
        })
