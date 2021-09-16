# Lab 2

## Part 1: Toggling a user image

### UserDetails.vue

Modify `UserDetails` so that after the `card-header` div, there is a `div.row.g-0`. The row should contain two columns, `.col-2` and `.col`. Move the current display into the second column.

Add an `img` to the first column. The source for the image can be found in the user's properties (hint: **picture**). Add the `img-fluid` class to the `img`. Verify that the image shows up in `UserDetails`.

### UserBrowser.vue

Add another `.row` above `UserDetails`. Add a button to the row, with the label "Show image". Attach a click event handler to the button. When clicked on, it should toggle between showing and hiding an image. You could, for example, create a property in `data()` called `showPictures` and set it to true or false as appropriate.

You could also change the text of the button so it swaps between "Show image" and "Hide image". 

Pass the `showPictures` value into `UserDetails` via the `showPictures` prop. We have not yet defined this prop on `UserDetails`, so let's do so now.

### UserDetails.vue

In the `props` configuration, add a `showPicture` prop, which is a boolean, and defaults to false. 

Add a `v-if` to the first column on the card. Show the column if `showPictures` is true, do not show it if `showPictures` is false. Use `v-show` if you prefer. 

**STOP HERE**

## Part 2: Computed properties

We need to tweak a few aspects of `UserDetails` to keep the display looking sharp.

### UserDetails.vue

Add a `computed` configuration. Configure a property `userImage` which returns the large picture property if `userType` is 'person' or or the medium picture property if `userType` is 'corporate'. 

Use the `userImage` property in the `src` property of the image. 

**STOP HERE**

## Part 3: Bound classes

Images for people are hard against the top border of the `UserDetails` card. Let's change that. 

### UserDetails.vue

Add a new computed property `isPerson`. It should return true if the user's `userType` is 'person`, and false otherwise.

Add a bound class to the first column (you can leave the hard-coded classes alone). Apply the class `pt-3` (padding-top, level 3) to the div if `isPerson` is true.

Check out your code in the `UserBrowser` to see if it works.

## Part 4: Introduction to v-model

The button as toggle between showing and hiding user images is fine, but we would like to use the new v-model directive. 

### UserBrowser.vue

In the row above `UserDetails`, replace the button with the following code:

```html
<span>Show pictures? </span>
<div class="form-check form-check-inline">
  <input
    id="showPicturesYes"
    class="form-check-input"
    type="radio"
    name="showPictures"
    checked
  >
  <label
    class="form-check-label"
    for="showPicturesYes"
  >Yes</label>
</div>
<div class="form-check form-check-inline">
  <input
    id="showPicturesNo"
    class="form-check-input"
    type="radio"
    name="showPictures"
  >
  <label
    class="form-check-label"
    for="showPicturesNo"
  >No</label>
</div>
```
This should render out two radio buttons, "Yes" and "No". 

If you haven't already, add a property to `data()` called `showPictures`. Initialize it to boolean false. 

Add a v-model directive to each of the checkboxes. Make sure it points to the `showPictures` variable. Add a bound value to each of the checkboxes. One should be true, the other false. 

Verify that you are passing `showPictures` as a value to the `:show-picture` property on `UserDetails`.

Test that your view toggles the display of user images based on the radio button you've checked.

**STOP HERE**




