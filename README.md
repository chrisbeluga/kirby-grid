# Kirby Grid Size Field

A simple grid size selection field for [Kirby CMS](https://getkirby.com),

## Preview

![](https://github.com/chrisbeluga/kirby-grid/blob/master/screenshot.png)

## Output

```json
{
    "class": {
      "start": "col-start-3",
      "end": "col-end-10",
      "span": "col-span-7"
  },
  "value": {
      "start": 3,
      "end": 10,
      "span": 7,
  }
}
```

## Installation & Usage

Copy plugin files to your plugin directory.

## Blueprint Usage

Add the following blueprint to wherever you would like the grid size field to appear.

```yaml
width:
  label: Grid Width
  type: grid
  options:
    columns: 12
    limit: 4
  width: 2/2
  help: Select the number of columns the grid should span over
```

## Example Blueprint for using with Tailwind CSS

```yaml
width:
  label: Grid Width
  type: grid
  options:
    columns: 12
    limit: 4
  offset:
    start: 0
    end: 1
  prefix:
    start: col-start-
    end: col-end-
    span: col-span-
  width: 2/2
  help: Select the number of columns the grid should span over
```

## Frontend Usage

```php
// Outputs the column span value as an integer
$page->field_name()->grid('value', 'span')

// Outputs the column start value as an integer
$page->field_name()->grid('value', 'start')

// Outputs the column end value as an integer
$page->field_name()->grid('value', 'end')

// Outputs the column span value as a class with optional prefix and/or suffix
$page->field_name()->grid('class', 'span')

// Outputs the span value as a class with optional prefix and/or suffix
$page->field_name()->grid('class', 'start')

// Outputs the span value as a class with optional prefix and/or suffix
$page->field_name()->grid('class', 'end')
```


## Options

| Option | Required | Default Values | Description |
| ------------- | ------------- | ------------- | ------------- |
| Options  | false | columns: 12<br/>limit: 0 | Set the number of columns in the grid, a limit can also be set to set the minimum size of the selected grid |
| Offset  | False | start: 0<br/>end: 0 | An offset can be added for use with CSS frameworks such as tailwind where a 12 column grid would end on 13 not 12. |
| Prefix  | False | start: none<br/>end: none<br/>span: none | Text to be added before the output class |
| Suffix  | False | start: none<br/>end: none<br/>span: none | Text to be added after the output class  |
