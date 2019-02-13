<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title> Optimal Strength Gains</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="api-token" content="{{Auth::user()->api_token}}">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="{{ asset('css/osg.typography.css') }}" rel="stylesheet">
</head>

<body class="ngx-osg">
    <optimal-strength-gains></optimal-strength-gains>

    <script type="text/javascript" src="{{ asset('ngx/runtime.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ngx/polyfills.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ngx/styles.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ngx/vendor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('ngx/main.js') }}"></script>

    <script src="https://use.fontawesome.com/e5013abe85.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</body>

</html>