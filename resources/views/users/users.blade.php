@extends('layouts.layout')
@section('content')
<div class="pull-right">
    <a class="btn btn-primary" href="{{ URL::asset('users/create') }}" role="button">Register</a>
</div>
<div class="clearfix"></div>
<div>
    <table class="table table-condensed">
        <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
        </tr>
        <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
        </tr>
        </tbody>
    </table>
</div>

@stop
@section('scripts')
    <script type="javascript" href="{{ URL::asset('assets/js/ngFileupload/ng-file-upload-shim.min.js') }}"></script>
    <script type="javascript" href="{{ URL::asset('assets/js/ngFileupload/ng-file-upload.min.js') }}"></script>
    <script type="javascript" href="{{ URL::asset('assets/app/js/angular/user.js') }}"></script>
    <script type="javascript" href="{{ URL::asset('assets/app/js/angular/controllers/user.js') }}"></script>
    <script type="javascript" href="{{ URL::asset('assets/app/js/angular/services/user.js') }}"></script>
@stop