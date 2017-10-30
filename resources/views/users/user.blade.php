@extends('layouts.layout')
@section('content')
    <div ng-app="app" ng-controller="userController" ng-init="test()">
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ URL::asset('users') }}" role="button">Dashboard</a>
        </div>
        <div class="clearfix"></div>
        <div>
            <form>
                <div class="form-group">
                    <label for="fullname">Full Name:</label>
                    <input type="text" class="form-control" id="fullname" ng-model="userObj.fullname">
                </div>
                <div class="form-group">
                    <label for="mobileno">Mobile No:</label>
                    <input type="text" class="form-control" id="mobileno">
                </div>
                <div class="form-group">
                    <label for="email">Profile Photo:</label>
                    <input ti-file-style type="file" profiletype="user" ti-user-profile
                           ngf-select="setProfile($file, false)" id="profileImage" accept="image/*" ngf-max-size="50MB"
                           class="filestyle" data-buttonBefore="true"  data-icon="false">
                </div>


                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" class="form-control" id="confirm-password">
                </div>
                <button type="button" class="btn btn-default" ng-click="saveUser();">Submit</button>
            </form>
        </div>
    </div>

@stop