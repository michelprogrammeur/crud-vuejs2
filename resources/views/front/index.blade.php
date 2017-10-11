@extends('layouts.app')

@section('content')
    <div id="app" v-cloak>
        <navbar></navbar>
        <router-view></router-view>
    </div>
@endsection