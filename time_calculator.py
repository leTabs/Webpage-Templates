
def add_time(starting, duration, day = ''):
    time_duration = ''
    starting = starting.split()
    s_time, duration = starting[0].split(':'), duration.split(':')
    event_hours = int(s_time[0]) + int(duration[0])
    event_min = int(s_time[1]) + int(duration[1])
    if event_min >= 60:
        print(event_min, 'look here')
        diff = event_min // 60
        event_min = event_min - (diff) * 60
        event_hours += diff
        for i in range(diff): # check thi shit out
            day = ', ' + 'Monday'
        if len(str(event_min)) == 1:
            event_min = '0' + str(event_min)
    if event_hours >= 12 and starting[1] == 'PM':
        starting[1] = 'AM'
        time_duration = '(next day)'

    elif event_hours >= 12 and starting[1] == 'AM':
        starting[1] = 'PM'
        time_duration = '(next day)'

    return f'{event_hours}:{event_min} {starting[1]}{day} {time_duration}'

print(add_time("3:55 AM", "12:5", 'pop'))



        #===========================================================
        # PLEASE TAKE CARE OF INCREASED MINUTE DURATIONS AND HOURS
        # OUTSE OF THE 12 HOUR WINDOW UPON RETURN
        # Advance it in line: 8
        #===========================================================
