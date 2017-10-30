<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">
    @include('layouts.head')
</head>
<body>
<div style="height: 50px; background-color: #0747A6;"></div>
<div class="container" style="margin-top: 25px;">
    @yield('content')
</div>
@include('layouts.footer')
</body>
</html>