$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
  });

  $(".portfolio .button-container .btn").click(function () {
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".portfolio .image-container .box").show("400");
    } else {
      $(".portfolio .image-container .box")
        .not("." + filter)
        .hide("200");
      $(".portfolio .image-container .box")
        .filter("." + filter)
        .show("400");
    }
  });

  $("#theme-toggler").click(function () {
    $(this).toggleClass("fa-sun");
    $("body").toggleClass("dark-theme");
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxuIZndU_fQ_cL4PEug1Gmv6qhZAcO02Vb2iomP0kHnPPSmCBEl-dPD44zI_Vghatd7fA/exec";
const form = document.forms["Contactform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

function validate() {
  var name = document.forms.Contactform.Name.value;
  var email = document.forms.Contactform.Email.value;
  var subject = document.forms.Contactform.Subject.value;
  var message = document.forms.Contactform.Message.value;
  if (name == "") {
    window.alert("name required");
    name.focus();
    return false;
  }
  if (email == "") {
    window.alert("email required");
    email.focus();
    return false;
  }
  if ((subject = "")) {
    window.alert("subject required");
    subject.focus();
    return false;
  }
  if (message == "") {
    window.alert("message required");
    message.focus();
    return false;
  }
  return true;
}
