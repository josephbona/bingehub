app.component('actorList', {
  bindings: {
    actors: '<'
  },
  template: `
    <div class="row">
      <div ng-repeat="actor in $ctrl.actors" class="col-md-6">
        <img ng-src="{{actor}}" alt="" />
      </div>
    </div>
  `,
});