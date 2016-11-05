app.component('card', {
  bindings: {
    card: '<'
  },
  template: `
    <a ui-sref="movie({id: $ctrl.card.id})" class="card">
      <img ng-src="{{ $ctrl.card.poster_240x342 }}" class="poster">
      <div class="details">
        <h2 class="title">{{ $ctrl.card.title }} <span class="year">({{ $ctrl.card.release_year }})</span></h2>
        <p class="stream-count">2 streams</p>
      </div>
    </a>
  `,
  controller: CardCtrl
});

function CardCtrl() {
  function launchModal() {
    console.log('modal launched');
  }

  this.launchModal = launchModal;
}