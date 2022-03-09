
  var Module = typeof createMediapipeSolutionsPackedAssets !== 'undefined' ? createMediapipeSolutionsPackedAssets : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'blaze-out/k8-opt/genfiles/third_party/mediapipe/web/solutions/holistic/holistic_solution_packed_assets.data';
      var REMOTE_PACKAGE_BASE = 'holistic_solution_packed_assets.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        
        if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string') {
          require('fs').readFile(packageName, function(err, contents) {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }
      
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
          if (fetchedCallback) {
            fetchedCallback(data);
            fetchedCallback = null;
          } else {
            fetched = data;
          }
        }, handleError);
      
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "third_party", true, true);
Module['FS_createPath']("/third_party", "mediapipe", true, true);
Module['FS_createPath']("/third_party/mediapipe", "modules", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "pose_detection", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "palm_detection", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "holistic_landmark", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "hand_landmark", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "face_landmark", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "face_geometry", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules/face_geometry", "data", true, true);
Module['FS_createPath']("/third_party/mediapipe/modules", "face_detection", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
      
          Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
            Module['removeRunDependency']('fp ' + that.name);
          }, function() {
            if (that.audio) {
              Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
            } else {
              err('Preloading file ' + that.name + ' failed');
            }
          }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
  
              this.requests[this.name] = null;
            }
          };
      
              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
              }
      
        
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_blaze-out/k8-opt/genfiles/third_party/mediapipe/web/solutions/holistic/holistic_solution_packed_assets.data');

      };
      Module['addRunDependency']('datafile_blaze-out/k8-opt/genfiles/third_party/mediapipe/web/solutions/holistic/holistic_solution_packed_assets.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
        if (fetched) {
          processPackageData(fetched);
          fetched = null;
        } else {
          fetchedCallback = processPackageData;
        }
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/third_party/mediapipe/modules/pose_detection/pose_detection.tflite", "start": 0, "end": 2962288, "audio": 0}, {"filename": "/third_party/mediapipe/modules/palm_detection/palm_detection_lite.tflite", "start": 2962288, "end": 4947728, "audio": 0}, {"filename": "/third_party/mediapipe/modules/palm_detection/palm_detection_full.tflite", "start": 4947728, "end": 7289008, "audio": 0}, {"filename": "/third_party/mediapipe/modules/holistic_landmark/hand_recrop.tflite", "start": 7289008, "end": 7412800, "audio": 0}, {"filename": "/third_party/mediapipe/modules/hand_landmark/handedness.txt", "start": 7412800, "end": 7412811, "audio": 0}, {"filename": "/third_party/mediapipe/modules/hand_landmark/hand_landmark_full.tflite", "start": 7412811, "end": 12891499, "audio": 0}, {"filename": "/third_party/mediapipe/modules/face_landmark/face_landmark_with_attention.tflite", "start": 12891499, "end": 15387451, "audio": 0}, {"filename": "/third_party/mediapipe/modules/face_landmark/face_landmark.tflite", "start": 15387451, "end": 16629347, "audio": 0}, {"filename": "/third_party/mediapipe/modules/face_geometry/data/geometry_pipeline_metadata_landmarks.binarypb", "start": 16629347, "end": 16648723, "audio": 0}, {"filename": "/third_party/mediapipe/modules/face_detection/face_detection_short_range.tflite", "start": 16648723, "end": 16877755, "audio": 0}], "remote_package_size": 16877755, "package_uuid": "ae959d57-f008-4fa8-81e3-d2180f7564f5"});
  
  })();
  