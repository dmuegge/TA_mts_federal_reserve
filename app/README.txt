Copyright (C) 2020 Muegge Technology Services, LLC All Rights Reserved.

Add-on:			FRED Add-On for Splunk
Current Version:	0.1.2
Last Modified:		2020-12-12
Splunk Version:		7.x, and 8.x
Author:			David Muegge - Muegge Technology Services, LLC

The FRED® Add-On for Splunk provides a way to easily retrieve FRED (Federal Reserve Economic Database) data and send into Splunk.

##### What's New #####

0.1.2 (2020-12-12)
Resolved the following issues:
- Added additional error handling for data removed from FRED API
- Removed series ID's GOLDAMGBD228NLBM & SLVPRUSD from default list
    they are no longer available via the FRED API due to LME licensing rules
- Updated sourcetype configuration

0.1.1 (2020-09-05)
Resolved the following issues:
- Corrected issues for AppInspect

0.1.0 (2020-08-15)
- Initial Release.


##### Technology Add-on Details ######

Sourcetype(s):				fred:series, fred:series:list
Supported Technologies:		Federal Reserve Economic Data API
Compatible Solutions:		Economic Analysis App for Splunk
							

###### Installation Instructions ######



###### Troubleshooting the add-on ######



###### Getting Help ######

