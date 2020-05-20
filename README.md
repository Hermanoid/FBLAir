# DigitAir:  Cut the Price, Not the Quality

DigitAir is a discount flight company, and this is their website.  Designed in Angular with components from [Material Kit by Creative Tim](https://demos.creative-tim.com/material-kit/index.html), [Ng-Bootstrap](https://ng-bootstrap.github.io/#/home), [Moment.JS](https://https//momentjs.com/) (see [here](https://digitair-test.azurewebsites.net/credits) for a complete list), this modern, responsive website delivers a quality customer experience as simply as possible.

It was designed By Lucas Niewohner, Developer, and Isabella Jetensky, Designer, for the [FBLA-PBL Website Competition](https://www.fbla-pbl.org/competitive-event/website-design-fbla/).

You can view the hosted website [here](https://digitair-test.azurewebsites.net/)

---

### How it works:

The root directory of the project includes a number of design files, in addition to a license and a setup file for this site's CI (Continuous Integration), which automatically pushes the latest commit of the website to the internet.  Inside "FBLAir", the fun begins:  all of the Angular website files are included in this directory, from a number of configuration files, to the source files ("src") for the webpages themselves, to an end-to-end testing system ("e2e") which, in accordance with the Law of Busy Schedules, has not been set up yet.  Inside "src" is a number of files describing the visible website itself, including "app", which defines the webpages as .html files with associated Typescript (.ts) files for Angular and SASS (.sass) design files, which compile into standard CSS.  "assets" holds all the static images, JSON libraries, CSS Libaries, SCSS Libraries (namely, Material Kit), and the Adobe Animation files which drive the animation on the first page.

### How to build it yourself:

First, [setup Angular](https://angular.io/guide/setup-local).  Then, [Clone the Repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), run `npm i` to install libraries, and finally serve locally with `ng serve --open`.  If all goes well, you should have a working copy of [https://digitair-test.azurewebsites.net/](https://digitair-test.azurewebsites.net/) in no time.