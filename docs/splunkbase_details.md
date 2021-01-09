# FRED&#174; Add-On for Splunk

The FRED&#174; Add-On for Splunk provides a way to easily retrieve FRED (Federal Reserve Economic Database) data and send into Splunk.

"This product uses the FRED® API but is not endorsed or certified by the Federal Reserve Bank of St. Louis."
https://fred.stlouisfed.org/docs/api/terms_of_use.html


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
   ![Default List Initialize](/appserver/static/ta-default-list.png)

3. Setting up credentials for the KVStore Server
   - This is simply Splunk login credentials the add-on uses to authenticate to the KVStore Server, which could be the local server or possibly the search head if you are running the input function on a heavy forwarder.
   - Click Configuration-->Account
   - Click the add button
   - Complete account name, user, and password and save.
  ![KVStore Account Setup](/appserver/static/ta-account_setup.png)
  
4. Entering the FRED API key
   - This step is to enter the API key obtained from FRED
   - Click Configuration-->Add-On Settings
   - Enter FRED API Key
   - Click the Save button
  ![FRED API Key Setup](/appserver/static/ta-api_key_setup.png)
  
5. Setting up the input definition
   - The FRED Add-On for Splunk supports two types of inputs one input which can be used to setup a single series. This input will rarely be used as second input type uses a list and the input will just retrieve data for all series maintained in the list so no need for separate inputs. To setup the FRED Default List Input complete the following:
     - Click Inputs
     - Click Create New Input --> FRED Series List
     - Complete input form options
     - Click Save  
  ![FRED API Key Setup](/appserver/static/ta-input_setup_2.png)

## Splunk Custom Command - fred
The FRED Add-On for Splunk also includes a custom command that will get data from the FRED API in real-time. Below is an example of getting 10-Year Treasury Rates

| fred series_id=DGS10 start_date=2015-01-01 end_date=2020-11-01

The fred command uses the FRED api key configured in the add-on setup

## Using the FRED Add-On for Splunk
The easiest way to get started with the FRED Add-On for Splunk is to install the Economic Analysis for Splunk app, which comes with a base set of dashboards and searches to get you started with the FRED data in Splunk.

## Change History
<table>
<tr><td>Version</td><td>Changes</td></tr>

<tr><td>0.1.0</td>
<td>Initial Release
</td></tr>
<tr><td>0.1.1</td>
<td>Update app.conf naming and spelling issue
</td></tr>
<tr><td>0.1.2</td>
<td>
<ul>
<li>Added additional error handling for data removed from FRED API
<li>Removed series ID's GOLDAMGBD228NLBM & SLVPRUSD from default list<br>
   <ul>
      <li>they are no longer available via the FRED API
   </ul>
<li>Updated sourcetype configuration
<li>Added fred custom command to query API in realtime
<li>Updated sourcetype names for future interoperability
</td></tr>
