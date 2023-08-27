---
layout: page
title: 定制
---
<div class="container">
    <div class="site-page__title">
        <h2>WEBUI 前端框架定制开发服务</h2>
        <p class="lead mt-3">CUSTOM DEVELOPMENT SERVICES</p>
    </div>

    <div class="site-page__card">
        <div class="row g-5 mb-5">
            {% for service in site.data.customize.services %}
            <div class="col-6 col-lg-3">
                <div class="card">
                    <img src="{{service.icon}}" class="thumb">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">{{service.title}}</h5>
                        <p class="card-text">{{service.desc}}</p>
                        <a href="#" class="btn btn-outline-primary stretched-link my-3">服务咨询</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
