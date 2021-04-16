# TNA frontend design toolkit

## Hero banners

### Hero banner with image full width
```html
<div class="tna-hero-banner tna-bg--dark">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="tna-hero-banner__image">
                    ...
                </div>
            </div>
            <div class="col-6">
                <div class="tna-hero-banner__body">
                    ...
                </div>
            </div>
        </div>
    </div>
</div>
```

### Hero banner without image full width
```html
<div class="tna-hero-banner tna-bg--dark">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="tna-hero-banner__body">
                    ...
                </div>
            </div>
        </div>
    </div>
</div>
```

### Hero banner with image column width
```html
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="tna-hero-banner tna-bg--dark">
                <div class="row">
                    <div class="col-6">
                        <div class="tna-hero-banner__image">
                            ...
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="tna-hero-banner__body">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
