const var_sucks = () => {
  var var_scope = 10;
  let let_scope = 20;

  console.log(`>>> var sucks before if: var=${var_scope} let=${let_scope}`);

  if (true) {
    var var_scope = 100;
    let let_scope = 100;
    console.log(`>>> var sucks inside if: var=${var_scope} let=${let_scope}`);
  }

  console.log(`>>> var sucks after if: var=${var_scope} let=${let_scope}`);
};

var_sucks();
