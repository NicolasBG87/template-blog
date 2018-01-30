// Side bar click event
$(".nav-title h5").on("click", function(){
  // Change color of all titles and authors to white
  $(".nav-title h5").css("color", "white");
  $(".nav-title .author").css("color", "white");
  // For screens less than a avg. laptop width
  if ($(window).width() < 1023) {
    // Hide sidebar
    $("#aside").css("display", "none");
    // Show button in the upper right corner of the main picture that toggles sidebar 
    $(".side-bar-btn").css("display", "block");
  } else {
    $("#aside").css("display", "block");
    $(".side-bar-btn").css("display", "none");
  }
  // HTML variables
  let title = this;
  let author = this.nextElementSibling.nextElementSibling;
  let id = this.parentElement.id;
  let li = this.parentElement;
  // Change color of title and author to orange
  title.style.color = "#FF851B";
  author.style.color = "#FF851B";
  // Fill main area with dummy data using title & author from the sidebar
  $(".article").html(`
    <h1>${title.textContent}</h1>
    <h6 class="handwrite"><em>${author.textContent}</em></h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum magni voluptate soluta sit aut, ullam, atque ducimus tempora voluptatibus mollitia! Eos nihil nostrum, facere impedit velit distinctio reprehenderit consequatur!
    Aliquam commodi dicta molestiae asperiores praesentium delectus molestias a non aperiam nisi, eaque quos! Minus officiis numquam accusamus. Et pariatur dicta impedit ducimus reprehenderit, quas maiores consequatur necessitatibus non nisi?
    Ut vitae magnam minus cum veniam saepe animi harum fuga eius cupiditate officia, delectus nobis dolores porro incidunt ullam deserunt nesciunt tempore perspiciatis, adipisci facere eos error voluptate! Culpa, quidem.
    Quasi vitae saepe hic itaque corrupti voluptatem, atque eligendi. Ducimus quis quia modi rerum autem minus doloremque nisi eius exercitationem laudantium, ab qui repudiandae hic, iure voluptate illum labore odio.
    Fugiat similique eius dolores hic perspiciatis, corrupti accusamus doloribus commodi voluptates ducimus natus omnis, inventore et. Quod odit debitis ea. Veniam animi provident id nulla mollitia repudiandae repellendus ex suscipit?</p>
    <br>

    <h3>Sub Title</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores deserunt, quod recusandae accusamus, laboriosam, vitae voluptas laudantium voluptatibus atque suscipit! Adipisci, suscipit exercitationem repellat maxime ducimus labore alias omnis.
    Quas impedit illum cupiditate nam dolorum iure quaerat accusamus! Tempore consequatur, corrupti aliquam facere minima accusamus maiores maxime eum blanditiis magnam eaque ab laborum asperiores officia vel perferendis voluptatibus consequuntur!
    Vero odit a qui deleniti optio, explicabo ex ullam maiores sed assumenda nostrum blanditiis cum cupiditate ipsum officiis neque numquam, autem sequi tempore nesciunt? Officia repellat molestiae facere similique eveniet.</p>
    <div class="row featured-img">
      <div class="col-md-8">
        <div class="image-placeholder"></div>
      </div>
      <div class="col-md-4">
        <p class="handwrite"><em>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed obcaecati laboriosam nobis aut ducimus, ipsa tenetur doloremque dolore."</em></p>
      </div>
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae minima, commodi libero inventore delectus fugit doloribus quia rem optio animi sapiente dolore quaerat itaque dolorum at placeat aliquid earum?
    Ipsum magni, atque illum earum aspernatur quos vero doloribus cum numquam quas in, id reiciendis nisi inventore quibusdam blanditiis nesciunt exercitationem officiis mollitia tempore hic nostrum neque fuga? Tempora, neque.
    Dolore magnam quasi accusamus, facilis vitae commodi beatae aliquam architecto qui vero ex, eligendi similique! Rem cumque dignissimos libero dolorem cum, necessitatibus velit consequuntur totam quae recusandae placeat dolore neque?</p>
    <br>

    <h3>Conclusion</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, dicta explicabo. Corrupti expedita ea unde reiciendis eveniet nesciunt natus illo enim, voluptatibus perspiciatis soluta repellat numquam incidunt accusantium saepe ducimus.Quisquam numquam dolorum culpa atque itaque eius at nemo, quibusdam, saepe tenetur vitae debitis recusandae voluptate labore minus autem sunt ducimus laborum aspernatur. A voluptatum assumenda illum culpa! Obcaecati, delectus?</p>  
  `);
  $(".header-img").css("background-image", `url("assets/images/${id}.jpeg")`);
});
// Show sidebar
$(".side-bar-btn").click(() =>{
  let aside = document.getElementById("aside");
  aside.style.display = "block";
});