# Problem and Solution

[TOC]

**Format:** 

**Problem**: (Situation description)

**OS Platform** :

**Error Message**:

**Type**: Setup exception

**Solution**:

**Related Reference**:

------

###### Problem[0] **:** Compile Error System limit for number of file watchers reached

**OS Platform** : Linux

**Error Message**: 

```
Error from chokidar (/home/usr/siem_project/siem_env/Docker/docker-curriculum/webapp/fusion-cloudy-master/src/assets/vendor): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/usr/siem_project/siem_env/Docker/docker-curriculum/webapp/fusion-cloudy-master/src/assets/vendor'
```

**Type**: Setup exception

**Solution**:

Linux uses the [inotify](http://man7.org/linux/man-pages/man7/inotify.7.html) package to observe filesystem events, individual files or directories. Since React / Angular hot-reloads and recompiles files on save it needs to keep track of all project's files. Increasing the inotify watch limit should hide the warning messages. The meaning of this error is that the number of files monitored by the system has reached the limit, so you need to Modify the number of system monitoring files: 

Edit the system control file :

`sudo gedit /etc/sysctl.conf`

Add a line at the bottom, then save and exit :

`fs.inotify.max_user_watches=500000`

Reload the system config setting:

`sudo sysctl -p`

Run the compile cmd `ng serve --open` or `npm run dev` to check whether the problem has been solved. 



------

###### Problem[1] **:** Can check the web page from localhost but can not view by use the IP address

**OS Platform** : Windows/Linux

**Error Message**: N.A 

On host machine the user can access with the url http://localhost:4200/ , when connect the host computer to network other computer can not access the url with the ulr http://ip:4200/

**Type**: Config issue.

**Solution**:

You can use the following command to access with your ip.

```js
ng serve --host 0.0.0.0 --disable-host-check
```

If you are using npm and want to avoid running the command every time, we can add the following line to the **package.json** file in the **scripts** section.

```js
"scripts": {
    ...
    "start": "ng serve --host 0.0.0.0 --disable-host-check"
    ...
}
```

Then you can run you app using the below command to be accessed from the other system in the same network.

```js
npm start
```

