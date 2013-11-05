LetoApp - A Single Page app test for Leto.
=========================================

this project is a test project developed by Damien PUIG for Leto, London. the aim of the project was building a Single Page App,
retreiving Data from the BBC website, and aggregating it to rating coming for themovieDB.


Technology Stack
----------------

As described in the package.json and bower.json, the project is based on the following stack:

* A nodeJs server rendering the first Single Page App. The server is build on top of Express, following the MVC pattern called Locomotive.
* An Angular Single App Page.
* Bootstrap design engine.

Installation
------------

To install the application, simply:

.. code-block:: bash

    $ sudo npm install

will install node dependencies.

Then,

.. code-block:: bash

    $ sudo bower install

will install bower dependencies (http://bower.io/)

Once locomotive is installed and all other dependencies, simply,

.. code-block:: bash

    $ lcm server

