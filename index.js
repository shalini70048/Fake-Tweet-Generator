const profilePreview = document.getElementById('profilePreview');
const fileInput = document.getElementById('fileInput');

const userFullName = document.querySelector('#user_fullname');
const userName = document.querySelector('#user_name');
const usertweet = document.querySelector('#user_tweet');
usertweet.value = "Impossible also says I am Possible"

const userTweetTime = document.querySelector('#tweet_time');
const userTweetDate = document.querySelector('#tweet_date');
const userTweetDevice = document.querySelector('#tweet_device');

const retweetCount = document.querySelector('#retweet_count');
const quoteCount = document.querySelector('#quote_count');
const likeCount = document.querySelector('#like_count');

const btnGenerate = document.querySelector('#btn_generate');
const previewProfilePreview = document.getElementById('preview_profile_Preview');
const previewUserFullName = document.querySelector('#preview_user_fullname');
const previewUserName = document.querySelector('#preview_user_name');
const previewUsertweet = document.querySelector('#preview_user_tweet');

const previewUserTweetTime = document.querySelector('#preview_tweet_time');
const previewUserTweetDate = document.querySelector('#preview_tweet_date');
const previewUserTweetDevice = document.querySelector('#preview_tweet_device');

const previewRetweetCount = document.querySelector('#preview_retweet_count');
const PreviewQuoteCount = document.querySelector('#preview_quote_count');
const previewLikeCount = document.querySelector('#preview_like_count');


const modal = document.getElementById("tweetModal");
const openModalBtn = document.getElementById("btn_generate");
const closeModal = document.querySelector(".close-btn");
const downloadButton = document.querySelector("#downloadBtn");
const previewContainer = document.querySelector("#preview-tweet");

const getTweetPreview = ({ tweet }) => {


  const { 
    
    userFullNameValue,
    userNameValue,
    userTweetValue,
    userTweetTimeValue,
    userTweetDateValue,
    userTweetDeviceValue,
    retweetCountValue,
    quoteCountValue,
    likeCountValue } = tweet;

  const tweetDate = formatDate(userTweetDateValue);
  previewUserFullName.innerHTML = userFullNameValue;
  previewUserName.innerHTML = userNameValue;
  previewUsertweet.innerHTML = userTweetValue;
  previewUserTweetTime.innerHTML = userTweetTimeValue;
  previewUserTweetDate.innerHTML = tweetDate;

  previewUserTweetDevice.innerHTML = userTweetDeviceValue;
  previewRetweetCount.innerHTML = retweetCountValue;
  PreviewQuoteCount.innerHTML = quoteCountValue;
  previewLikeCount.innerHTML = likeCountValue;

}

function formatDate(inputDate) {
  const date = new Date(inputDate); // Convert string to Date object

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options); // Format the date

}
const getTweetValues = () => {
  const userFullNameValue = userFullName.value;
  const userNameValue = userName.value;
  const userTweetValue = usertweet.value;

  const userTweetTimeValue = userTweetTime.value;
  const userTweetDateValue = userTweetDate.value;
  const userTweetDeviceValue = userTweetDevice.value;

  const retweetCountValue = retweetCount.value;
  const quoteCountValue = quoteCount.value;
  const likeCountValue = likeCount.value;

  const userTweetObj = {
    userFullNameValue,
    userNameValue,
    userTweetValue,
    userTweetTimeValue,
    userTweetDateValue,
    userTweetDeviceValue,
    retweetCountValue,
    quoteCountValue,
    likeCountValue
  }
  getTweetPreview({ tweet: userTweetObj })
};

btnGenerate.addEventListener('click', getTweetValues);

// Open modal when clicking the button
openModalBtn.addEventListener('click', () => {
  modal.style.display = "flex";
});

// Close modal when clicking "×"
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

downloadButton.addEventListener('click', () => {
  console.log("shalu")
  PrintDiv(previewContainer);
});

function PrintDiv(div) {
  html2canvas(div).then((canvas) => {
    var myImage = canvas.toDataURL();
    downloadURI(myImage, 'shalu.png');
  });
}

function downloadURI(uri, name) {
  var link = document.createElement('a');

  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  //after creating link you should delete dynamic link
  //clearDynamicLink(link);
}




      profilePreview.addEventListener('click', function () {
        fileInput.click();
      });

      fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            document.getElementById('profilePreview').src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });








