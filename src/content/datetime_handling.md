---
grandParent: "Pandas"
grandParentOrder: 20
parent: "Data Cleaning"
parentOrder: 35
self: "Date/Time Handling"
selfOrder: 40
---

## Basic DateTime Conversion
Convert string dates to datetime format. Essential for time-based operations and analysis.

```python
import pandas as pd

# Different date formats
df = pd.DataFrame({
   'dates': ['2024-01-01', '01/15/2024', 'Jan 30, 2024']
})

# Convert to datetime
df['datetime'] = pd.to_datetime(df['dates'])
print(df)
```
```output
          dates   datetime
0    2024-01-01 2024-01-01
1    01/15/2024 2024-01-15
2  Jan 30, 2024 2024-01-30
```

## Timezone Handling
Work with timezone-aware datetime data. Critical for international data analysis.

```python
# Create timezone-aware dates
dates = pd.date_range('2024-01-01', periods=3, tz='UTC')
df = pd.DataFrame({'datetime': dates})

# Convert to different timezone
print("Original (UTC):")
print(df)
print("\nConverted to US/Eastern:")
print(df.assign(us_eastern=df['datetime'].dt.tz_convert('US/Eastern')))
```
```output
Original (UTC):
                       datetime
0 2024-01-01 00:00:00+00:00
1 2024-01-02 00:00:00+00:00
2 2024-01-03 00:00:00+00:00

Converted to US/Eastern:
                       datetime                   us_eastern
0 2024-01-01 00:00:00+00:00 2023-12-31 19:00:00-05:00
1 2024-01-02 00:00:00+00:00 2024-01-01 19:00:00-05:00
2 2024-01-03 00:00:00+00:00 2024-01-02 19:00:00-05:00
```

## Date Components
Extract individual components from datetime objects.

```python
df = pd.DataFrame({
   'datetime': pd.date_range('2024-01-01', periods=3)
})

# Extract components
print(df.assign(
   year=df['datetime'].dt.year,
   month=df['datetime'].dt.month,
   day=df['datetime'].dt.day,
   weekday=df['datetime'].dt.day_name()
))
```
```output
   datetime  year  month  day  weekday
0 2024-01-01  2024      1    1   Monday
1 2024-01-02  2024      1    2  Tuesday
2 2024-01-03  2024      1    3 Wednesday
```

## Date Offsets
Add or subtract time periods from dates.

```python
from pandas.tseries.offsets import Day, BusinessDay, Month

date = pd.Timestamp('2024-01-01')
print(f"Original: {date}")
print(f"Add 5 days: {date + 5 * Day()}")
print(f"Add 5 business days: {date + 5 * BusinessDay()}")
print(f"Add 1 month: {date + Month()}")
```
```output
Original: 2024-01-01 00:00:00
Add 5 days: 2024-01-06 00:00:00
Add 5 business days: 2024-01-08 00:00:00
Add 1 month: 2024-02-01 00:00:00
```

## Date Ranges
Create sequences of dates for analysis.

```python
# Different ways to create date ranges
dates1 = pd.date_range('2024-01-01', '2024-01-05', freq='D')
dates2 = pd.date_range('2024-01-01', periods=5, freq='B')  # Business days

print("Daily dates:")
print(dates1)
print("\nBusiness days:")
print(dates2)
```
```output
Daily dates:
DatetimeIndex(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04',
              '2024-01-05'],
             dtype='datetime64[ns]', freq='D')

Business days:
DatetimeIndex(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04',
              '2024-01-05'],
             dtype='datetime64[ns]', freq='B')
```

## Period and Frequency
Work with time periods instead of timestamps.

```python
# Create period range
periods = pd.period_range('2024-01', periods=3, freq='M')
df = pd.DataFrame({'period': periods})

print("Periods:")
print(df)
print("\nStart time of each period:")
print(df['period'].dt.start_time)
```
```output
Periods:
   period
0 2024-01
1 2024-02
2 2024-03

Start time of each period:
0   2024-01-01 00:00:00
1   2024-02-01 00:00:00
2   2024-03-01 00:00:00
Name: period, dtype: datetime64[ns]
```