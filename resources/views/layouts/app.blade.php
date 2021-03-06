<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="{{ asset('./css/libs/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('./css/libs/swiper.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('./css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
    @yield('content')

    <script src="{{ asset('js/libs/velocity.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('script')
</body>
</html>
