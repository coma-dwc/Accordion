"use strict"

$(() => {
  //クリックイベントハンドラ
  $(".header").on("click", (e) => {
    //ここに処理を書く
    const $target = $(e.target);
    //$targetから遡って一番近い.accordionを探す
    const $accordion = $target.closest(".accordion");
    //$accordionから子要素のbodyを探す
    const $accordionBody = $accordion.children(".body");

    //ボディが可視状態か判定する
    if($accordionBody.is(":visible")) {
      //可視状態の場合
      $accordion.removeClass("show");
      $accordionBody.slideUp(150);
    } else {
      //不可視状態の場合
      $accordion.addClass("show");
      $accordionBody.slideDown(150);
    }
  });
});