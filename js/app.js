'use strict';

console.log('app,js loaded');

function Animal(animal) {
  this.image_url = animal.image_url;
  this.title = animal.title;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

Animal.prototype.render = function () {
  let $animalClone = $('.photo-template').clone();
  $('main').append($animalClone);

  $animalClone.find('h2').text(this.title);
  $animalClone.find('img').attr('src', this.image_url);
  $animalClone.find('p').text(this.description);
  $animalClone.find('img').attr('atl', this.keyword);
  $animalClone.find('aside').text(this.horns);

  $animalClone.removeClass('class');
  $animalClone.attr('class', this.title);
};

Animal.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('data/page-1.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let animal = new Animal(item);
        animal.render();
      });
    });
};

$(() => Animal.readJson());
