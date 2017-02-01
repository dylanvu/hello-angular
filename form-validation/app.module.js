(function() {
  'use strict';

  angular.module('app', ['ngMessages'])
    .component('validations', {
      controller: function() {
        const vm = this;

        vm.submitForm = function(e, isValid) {
          e.preventDefault();
          vm.users = vm.users || [];
          if (isValid) {
            vm.users.push(vm.user);
            vm.user = {};
            vm.userForm.$setPristine();
          }
        }
      },

      template: `
        <h1>Users</h1>

        <div ng-repeat="user in $ctrl.users">
          <h3>{{ user }}<h3>
        </div>

        <form novalidate name="$ctrl.userForm" class="form" ng-submit="$ctrl.submitForm($event, $ctrl.userForm.$valid)">
          <div
            class="form-group"
            ng-class="{
              'has-danger':
                $ctrl.userForm.username.$invalid && !$ctrl.userForm.username.$pristine,
              'has-success':
                $ctrl.userForm.username.$valid
            }">
            <label class="form-control-label" for="username">Username</label>
            <input
              autofocus
              class="form-control"
              name="username"
              ng-model="$ctrl.user.username"
              id="username"
              ng-minlength="3"
              ng-maxlength="12"
              ng-required="true"
              type="text"/>
            <div ng-messages="$ctrl.userForm.username.$error">
              <p class="form-control-feedback" ng-message="minlength">
                username is too short.
              </p>
              <p class="form-control-feedback" ng-message="maxlength">
                username is too long.
              </p>
            </div>
          </div>

          <div
            class="form-group"
            ng-class="{
              'has-danger':
                $ctrl.userForm.password.$invalid && !$ctrl.userForm.password.$pristine,
              'has-success':
                $ctrl.userForm.password.$valid
            }">
            <label class="form-control-label" for="password">Password</label>
            <input
              class="form-control"
              name="password"
              ng-model="$ctrl.user.password"
              id="password"
              ng-minlength="8"
              ng-maxlength="64"
              ng-required="true"
              type="password"/>
            <div ng-messages="$ctrl.userForm.password.$error">
              <p class="form-control-feedback" ng-message="minlength">
                password is too short.
              </p>
              <p class="form-control-feedback" ng-message="maxlength">
                password is too long.
              </p>
            </div>
          </div>

          <div
            class="form-group"
            ng-class="{
              'has-danger':
                $ctrl.userForm.email.$invalid && !$ctrl.userForm.email.$pristine,
              'has-success':
                $ctrl.userForm.email.$valid
            }">
            <label class="form-control-label" for="email">Email</label>
            <input
              class="form-control"
              name="email"
              ng-model="$ctrl.user.email"
              id="email"
              ng-required="true"
              type="email"/>
            <div ng-messages="$ctrl.userForm.email.$error">
              <p class="form-control-feedback" ng-message="email">
                enter a valid email.
              </p>
            </div>
          </div>

          <div
            class="form-group"
            ng-class="{
              'has-danger':
                $ctrl.userForm.zip.$invalid && !$ctrl.userForm.zip.$pristine,
              'has-success':
                $ctrl.userForm.zip.$valid
            }">
            <label class="form-control-label" for="zip">Zip (5-digits)</label>
            <input
              class="form-control"
              name="zip"
              id="zip"
              ng-model="$ctrl.user.zip"
              ng-minlength="5"
              ng-maxlength="5"
              ng-required="true"
              type="number"/>
            <div ng-messages="$ctrl.userForm.zip.$error">
              <p class="form-control-feedback" ng-message="minlength, maxlength">
                enter a valid zip code.
              </p>
            </div>
          </div>

          <button class="btn btn-primary" type='submit' ng-disabled="$ctrl.userForm.$invalid">Submit</button>
        </form>
      `
    });
}());
