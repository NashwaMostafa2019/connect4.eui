const login = document.getElementById("login");

const checkDataUser = () => {
  const checkDataInLocalStorage = JSON.parse(localStorage.getItem("signupData"));
  if (!checkDataInLocalStorage) return;

  login.innerHTML = `<a href="./profile_user/index.html">Hi ${checkDataInLocalStorage.firstname}</a>`;
};

checkDataUser();
