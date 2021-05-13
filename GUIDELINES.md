# Guidelines

### Block Element Modifier (BEM)

TNA frontend toolkit uses the [Block Element Modifier (BEM)](http://getbem.com/) methodology when naming CSS classes. This is designed to help developers understand how the different classes relate to each other.

### Grid

TNA frontend toolkit uses [Bootstrap 4.3.1 grid system](https://getbootstrap.com/docs/4.3/layout/grid/). Other Bootstrap components are not included.

### Namespacing and naming BEM classes

* Prefix global components with with `tna-` to reduce the likelihood of conflicting with existing classes in applications..
* Names are written in lowercase letters.
* Words within the names of BEM entities are separated by a hyphen (-).
* The element name is separated from the block name by a double underscore (__).
* Modifiers are separated from the name of the block or element by a double hyphen (--).
* The value of a modifier is separated from its name by a double hyphen (--).
```html
tna-[block]__[element]--[modifier]--[modifier-value]
```

### CSS and Sass guidelines

#### Avoid mixing BEM and grid classes on the same element

Bad:
```html
<div class="col-sm-8 tna-block__element">
</div>
```

Good:
```html
<div class="col-sm-8">
  <div class="tna-block__element">
  </div>
</div>

<div class="tna-block__element">
  <div class="container">
    <div class="row">
     </div>
  </div>
</div>
```

#### Write each property on its own line

Bad:
```scss
.tna-block {border: 0; padding: 0;}
```

Good:
```scss
.tna-block {
  border: 0;
  padding: 0;
}
```

#### Use SASS nesting

Bad:
```scss
.tna-block {
  ...
}

.tna-block__element {
  ...
}

.tna-block__element--modifier {
  ...
}
```

Good:
```scss
.tna-block {
  ...

  &__element {
  ...
  
    &--modifier {
    ...
    }
  }
}
```

#### Use variables for colours

Bad:
```scss
.tna-block {
  color: #005ea5;
}
```

Good:
```scss
.tna-block {
  color: $blue;
}
```

#### Avoid using ID selectors

Bad:
```scss
#tna-block {
  ...
}
```

Good:
```scss
.tna-block {
  ...
}
```

#### Separate rule, function, and mixin declarations with empty lines

Bad:
```scss
.tna-block-one {
  margin: 0;
  &__element {
    ...
  }
}
.tna-block-two {
  ...
}
```

Good:
```scss
.tna-block-one {
  margin: 0;

  &__element {
    ...
  }
}

.tna-block-two {
  ...
}
```

#### Avoid declaring HTML tags

Bad:
```scss
.tna-block {
  ...
  
  &__element {
  ...
  
    a {
      margin: 0;
    }
  }
}
```
```html
<div class="tna-block__element">
    <a href=""></a>
</div>
```

Good:
```scss
.tna-block {
  ...
  
  &__element-link {
    margin: 0;
  }
}
```
```html
<div class="tna-block__element">
    <a href="" class="tna-block__element-link"></a>
</div>
```

#### Properties should be formatted with a single space separating the colon from the property's value

Bad:
```scss
.tna-block {
  margin:0;
}
```

Good:
```scss
.tna-block {
  margin: 0;
}
```
#### Use relative units rather than absolute 

Bad: 
```scss
.tna-block {
  padding: 16px;
}
```
Good: 
```scss
.tna-block {
  padding: 1rem;
}
```

#### Omit length units on zero values

Bad:
```scss
.tna-block {
  margin: 0px;
}
```

Good:
```scss
.tna-block {
  margin: 0;
}
```

### Examples

#### Card
```scss
.tna-card {

  &__link {
    position: relative;
    display: block;
    width: 100%;
    text-decoration: none;
  }

  &__image {
    overflow: hidden;
    max-height: 10em;
  }

  &__body {
    margin: 0.3em 0;
  }
}
```
```html
<div class="container">
    <div class="row">
        <div class="col-4">
            <article class="tna-card">
                <a href="#" class="tna-card__link">
                    <div class="tna-card__image">
                        <img src="image.jpg" alt="image">
                    </div>
                    <div class="tna-card__body">
                        <h3>Title</h3>
                        <p>Labore habemus in duo. Velit labore habemus in duo.</p>
                    </div>
                </a>
            </article>
        </div>
    </div>
</div>
```
