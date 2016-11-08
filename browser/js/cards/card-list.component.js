app.component('cardList', {
  bindings: {
    cards: '<cards'
  },
  template: `
    <div class="row-cards">
      <div ng-repeat="card in $ctrl.cards" class="col-card">
        <card card="card"></card>
      </div>
    </div>
  `,
});