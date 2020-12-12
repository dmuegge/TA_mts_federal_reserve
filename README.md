# FRED&#174; Add-On for Splunk

The FRED&#174; Add-On for Splunk provides a way to easily retrieve FRED (Federal Reserve Economic Database) data and send into Splunk.

"This product uses the FRED® API but is not endorsed or certified by the Federal Reserve Bank of St. Louis."
https://fred.stlouisfed.org/docs/api/terms_of_use.html

## What is FRED&#174;?
FRED® stands for Federal Reserve Economic Data. FRED® contains frequently updated US macro and regional economic time series at annual, quarterly, monthly, weekly, and daily frequencies. FRED® aggregates economic data from a variety of sources- most of which are US government agencies. The economic time series in FRED® contain observation or measurement periods associated with data values. For instance, the US unemployment rate for the month of January, 1990 was 5.4 percent and for the month of January, 2000 was 4.0 percent.

source: https://fred.stlouisfed.org/docs/api/fred/fred.html


## Getting an API key from FRED
To use the FRED Add-On for Splunk you will need to register with FRED and receive an API key. This process is free and simple, just go to the following URL: https://research.stlouisfed.org/useraccount/login/secure/

Keep your API key handy you will need it later.

## Installing the FRED Add-On for Splunk
1. Download the app install file from SplunkBase or Github releases and save it in an easily accessible place.
2. The add-on consists of a modular input and a KVStore list used by the input. 
   - The add-on would be installed on a search head where the FRED_Default_List will be populated
   - The add-on may also be installed on a heavy forwarder to configure the input portion and offload processing from the search head

## Configuring the FRED Add-On for Splunk
The initial installation of the add-on is pretty straight forward. It consists of a few simple steps.

1. Create an index for your data
   - Strongly recommended name 'fred_data'. This name will allow for a no configuration installation of the Economic Analysis for Splunk app.
2. Populating the FRED_Default_List KVStore lookup list.
   - The FRED Default List provides two main functions
      1. It tells the add-on what FRED data series to retrieve
      2. It provides lookup data in the Economic Analysis for Splunk app.
   
        Typically most people will want to start by seeding the FRED Default List with the base data. To do this complete the following:
        - Click on Configuration-->Initial Setup in the add-on drop down menu.
        - Click the LoadList button
        - Click OK to confirm the warning and the complete message
  ![Default List Initialize](/app/appserver/static/ta-default-list.png)

3. Setting up credentials for the KVStore Server
   - This is simply Splunk login credentials the add-on uses to authenticate to the KVStore Server, which could be the local server or possibly the search head if you are running the input function on a heavy forwarder.
   - Click Configuration-->Account
   - Click the add button
   - Complete account name, user, and password and save.
  ![KVStore Account Setup](/app/appserver/static/ta-account_setup.png)
  
4. Entering the FRED API key
   - This step is to enter the API key obtained from FRED
   - Click Configuration-->Add-On Settings
   - Enter FRED API Key
   - Click the Save button
  ![FRED API Key Setup](/app/appserver/static/ta-api_key_setup.png)
  
5. Setting up the input definition
   - The FRED Add-On for Splunk supports two types of inputs one input which can be used to setup a single series. This input will rarely be used as second input type uses a list and the input will just retrieve data for all series maintained in the list so no need for separate inputs. To setup the FRED Default List Input complete the following:
     - Click Inputs
     - Click Create New Input --> FRED Series List
     - Complete input form options
     - Click Save  
   ![FRED API Key Setup](/app/appserver/static/ta-input_setup_2.png)


## Using the FRED Add-On for Splunk
The easiest way to get started with the FRED Add-On for Splunk is to install the Economic Analysis for Splunk app, which comes with a base set of dashboards and searches to get you started with the FRED data in Splunk.


