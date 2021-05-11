(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageCompress"] = factory();
	else
		root["ImageCompress"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "util": () => (/* binding */ util)
/* harmony export */ });
const WIN = window

const util = {
  // 用户通过页面标签 <input type="file" /> 上传的本地图片直接转化 data URL 字符串形式。
  // 可以使用 FileReader 文件读取构造函数。
  // FileReader 对象允许 Web 应用程序异步读取存储在计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
  // 该实例方法 readAsDataURL 读取文件内容并转化成 base64 字符串。
  // 在读取完后，在实例属性 result 上可获取文件内容。

  /**
  * 文件转化成 `data URL` 字符串
  * @param {File} file 文件对象
  * @param {Function} callback 成功回调函数
  * @param {Function} error 取消回调函数
  */
  file2DataUrl: (file, callback, error) => {
    let reader = new FileReader()
    // 加载成功则执行成功回调函数
    reader.onload = function () {
      callback(reader.result)
    }
    // 加载失败则执行失败回调函数
    reader.onerror = function () {
      if (isFunc(error)) {
        error('读取文件失败！')
      }
    }
    reader.readAsDataURL(file)
  },





  // 若想将用户通过本地上传的图片放入缓存并 img 标签显示出来，除了可以利用以上方法转化成的 base64 字符串作为图片 src，还可以直接用 URL 对象，引用保存在 File 和 Blob 中数据的 URL。
  // 使用对象 URL 的好处是可以不必把文件内容读取到 JavaScript 中 而直接使用文件内容。
  // 为此，只要在需要文件内容的地方提供对象 URL 即可。
  // 注意：要创建对象 URL，可以使用 window.URL.createObjectURL() 方法，并传入 File 或 Blob 对象。如果不再需要相应数据，最好释放它占用的内容。但只要有代码在引用对象 URL，内存就不会释放。要手工释放内存，可以把对象 URL 传给 URL.revokeObjectURL()。

  /**
   * 文件转化成 `Image` 对象
   * @param {File} file 文件对象
   * @param {Function} callback 成功回调函数
   * @param {Function} error 错误回调函数
   */
  file2Image: (file, callback, error) => {
    let image = new Image()
    let URL = WIN.URL || WIN.webkitURL

    // 解决IOS上webkit内核浏览器抛出错误 `The operation is insecure` 问题
    if (WIN.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WIN.navigator.userAgent)) {
      image.crossOrigin = 'anonymous'
    }

    image.alt = file.name
    image.onerror = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }

    // 如果存在URL，则直接使用 URL.createObjectURL() 方法，否则使用 file2DataUrl 方法
    if (URL) {
      let url = URL.createObjectURL(file)
      image.onload = function () {
        callback(image)
        URL.revokeObjectURL(url)
      }
      image.src = url
    } else {
      undefined.file2DataUrl(file, function (dataUrl) {
        image.onload = function () {
          callback(image)
        }
        image.src = dataUrl
      }, error)
    }
  },





  // 通过图片链接（url）获取图片 Image 对象，由于图片加载是异步的，因此放到回调函数 callback 回传获取到的 Image 对象。

  /**
   * `url` 转化成 `Image` 对象
   * @param {File} url `url`
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  url2Image: (url, callback, error) => {
    let image = new Image()
    image.src = url
    image.onload = function () {
      callback(image)
    }
    image.onerror = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }
  },





  // 利用 drawImage() 方法将 Image 对象绘画在 Canvas 对象上。

  /**
   * `Image` 转化成 `Canvas` 对象
   * @param {File} image `Image` 对象
   * @param {Number} dWidth 目标宽度
   * @param {Number} dHeight 目标高度
   * @param {Function} beforeDraw 在图片绘画之前的回调函数
   * @param {Function} afterDraw 在图片绘画之后的回调函数
   * @param {Number} width 宽
   * @param {Number} height 高
   * @return {HTMLCanvasElement} `Canvas` 对象
   */
  image2Canvas: (image, dWidth, dHeight, beforeDraw, afterDraw, width, height) => {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = width || image.naturalWidth
    canvas.height = height || image.naturalHeight
    if (isFunc(beforeDraw)) {
      beforeDraw(ctx, canvas)
    }
    ctx.save()
    ctx.drawImage(image, 0, 0, dWidth, dHeight)
    ctx.restore()
    if (isFunc(afterDraw)) {
      afterDraw(ctx, canvas)
    }
    return canvas
  },





  // HTMLCanvasElement 对象有 toDataURL(type, encoderOptions) 方法，返回一个包含图片展示的 data URL 。
  // 同时可以指定输出格式和质量。

  /**
   * `Canvas` 转化成 `data URL` 对象
   * @param {File} file  `Canvas` 对象
   * @param {Float} quality 输出质量比例
   * @return {String} `data URL` 字符串
   */
  canvas2DataUrl: (canvas, quality, type) => {
    return canvas.toDataURL(type || 'image/jpeg', quality)
  },





  // 图片链接也可以是 base64 字符串，直接赋值给 Image 对象 src 即可。

  /**
   * `data URL` 转化成 `Image` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  dataUrl2Image: (dataUrl, callback, error) => {
    let image = new Image()
    image.onload = function () {
      callback(image)
    }
    image.error = function () {
      if (isFunc(error)) {
        error('图片加载错误！')
      }
    }
    image.src = dataUrl
  },





  // 将 data URL 字符串转化为 Blob 对象。主要思路是：先将 data URL 数据（data） 部分提取出来，用 atob 对经过 base64 编码的字符串进行解码，再转化成 Unicode 编码，存储在Uint8Array（8位无符号整型数组，每个元素是一个字节） 类型数组，最终转化成 Blob 对象。

  /**
   * `data URL` 转化成 `Blob` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {String} type `mime`
   * @return {Blob} `Blob` 对象
   */
  dataUrl2Blob: (dataUrl, type) => {
    let data = dataUrl.split(',')[1]
    let mimePattern = /^data:(.*?)(base64)?,/
    let mime = dataUrl.match(mimePattern)[1]
    let binStr = atob(data)
    let len = data.length
    let arr = new Uint8Array(len)

    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i)
    }
    return new Blob([arr], { type: type || mime })
  },





  // 将 Blob 对象转化成 data URL 数据，由于 FileReader 的实例 readAsDataURL 方法不仅支持读取文件，还支持读取 Blob 对象数据，这里复用上面 file2DataUrl 方法即可

  /**
   * `Blob` 对象转化成 `data URL`
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 成功回调函数
   * @param {Function} error 失败回调函数
   */
  blob2DataUrl: (blob, callback, error) => {
    undefined.file2DataUrl(blob, callback, error)
  },





  // 将 Blob 对象转化成 Image 对象，可通过 URL 对象引用文件，也支持引用 Blob 这样的类文件对象，同样，这里复用上面 file2Image 方法即可：

  /**
   * `Blob`对象 转化成 `Image` 对象
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 成功回调函数
   * @param {Function} callback 失败回调函数
   */
  blob2Image: (blob, callback, error) => {
    undefined.file2Image(blob, callback, error)
  },





  // HTMLCanvasElement 有 toBlob(callback, [type], [encoderOptions]) 方法创造 Blob 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。第二个参数指定图片格式，如不特别指明，图片的类型默认为 image/png，分辨率为 96dpi。第三个参数用于针对image/jpeg 格式的图片进行输出图片的质量设置。

  /**
   * `Canvas` 对象转化成 `Blob` 对象
   * @param {HTMLCanvasElement} canvas `Canvas` 对象
   * @param {Function} callback 回调函数
   * @param {Float} quality 输出质量比例
   * @param {String} type `mime`
   */
  canvas2Blob: (canvas, callback, quality, type) => {
    let _this = undefined
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function (callback, type, quality) {
          let dataUrl = this.toDataURL(type, quality)
          callback(_this.dataUrl2Blob(dataUrl))
        }
      })
    }
    canvas.toBlob(function (blob) {
      callback(blob)
    }, type || 'image/jpeg', quality || 0.8)
  },





  // 上传图片（已压缩），可以使用 FormData 传入文件对象，通过 XHR 直接把文件上传到服务器。

  /**
   * 文件上传
   * @param {String} url 上传路径
   * @param {File} file 文件对象
   * @param {Function} callback 回调函数
   */
  upload: (url, file, callback) => {
    let xhr = new XMLHttpRequest()
    let fd = new FormData()
    fd.append('file', file)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 上传成功
        callback && callback(xhr.responseText)
      } else {
        throw new Error(xhr)
      }
    }
    xhr.open('POST', url, true)
    xhr.send(fd)
  }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EXIF = __webpack_require__(1)
const REGEXP_IMAGE_TYPE = /^image\// // 判断图片类型正则表达式
const REGEXP_EXTENSION = /\.\w+$/ // 判断文件扩展名正则表达式
const util = __webpack_require__(2)

// 默认配置项
const defaultOptions = {
  file: null,
  quality: 0.8,
  convertSize: 2048000,
  loose: true,
  redressOrientation: true
}

// 判断是否是函数
const isFunc = val => {
  return typeof val === 'function'
}

// 判断是否是图片类型
const isImageType = val => {
  return REGEXP_IMAGE_TYPE.test(val)
}

// 图片类型转化为文件拓展名
const imageTypeToExtension = val => {
  const extension = isImageType(val) ? val.substr(6) : ''
  if (extension === 'jpeg') {
    extension = 'jpg'
  }
  return '.' + extension
}

// ImageCompress类
class ImageCompress {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options)
    this.file = options.file
    this.image = null
    this.ParsedOrientationInfo = null

    // 初始化
    this.init()
  }

  // 初始化
  init() {
    let _this = this
    let file = this.file
    let options = this.options

    // 图片校验
    if (!file || !isImageType(file.type)) {
      _this.error('请上传图片文件!')
      return
    }

    // 初始化mimeType
    if (!isImageType(options.mimeType)) {
      options.mimeType = file.type
    }

    util.file2Image(file, function (img) {
      if (isFunc(_this.beforeCompress)) {
        _this.image = img
        file.width = img.naturalWidth
        file.height = img.naturalHeight
        _this.beforeCompress(file)
      }

      if (file.type === 'image/jpeg' && options.redressOrientation) {
        _this.getParsedOrientationInfo(img, function (info) {
          _this.parsedOrientationInfo = info
          _this.rendCanvas()
        })
      } else {
        _this.parsedOrientationInfo = {
          rotate: 0,
          scaleX: 1,
          scaleY: 1
        }
        _this.rendCanvas()
      }
    }, _this.error)
  }

  // canvas渲染模块
  rendCanvas() {
    let _this = this
    let options = this.options
    let image = this.image
    let edge = this.getExpectedEdge()
    let dWidth = edge.dWidth
    let dHeight = edge.dHeight
    let width = edge.width
    let height = edge.height

    let canvas = util.image2Canvas(image, dWidth, dHeight, _this.beforeDraw.bind(_this), _this.afterDraw.bind(_this), width, height)

    util.canvas2Blob(canvas, function (blob) {
      if (blob) {
        blob.width = canvas.width
        blob.height = canvas.height
      }
      _this.success(blob)
    }, options.quality, options.mimeType)
  }

  // 压缩之前的钩子函数
  beforeCompress() {
    if (isFunc(this.options.beforeCompress)) {
      this.options.beforeCompress(this.file)
    }
  }

  // 获取用户想要输出的宽高
  getExpectedEdge() {
    let image = this.image
    let parsedOrientationInfo = this.parsedOrientationInfo
    let rotate = parsedOrientationInfo.rotate
    let options = this.options
    let naturalWidth = image.naturalWidth
    let naturalHeight = image.naturalHeight

    let is90DegreesRotated = Math.abs(rotate) % 180 === 90
    let temp

    if (is90DegreesRotated) {
      temp = naturalHeight
      naturalHeight = naturalWidth
      naturalWidth = temp
    }

    let aspectRatio = naturalWidth / naturalHeight
    let maxWidth = Math.max(options.maxWidth, 0) || Infinity
    let maxHeight = Math.max(options.maxHeight, 0) || Infinity
    let minWidth = Math.max(options.minWidth, 0) || 0
    let minHeight = Math.max(options.minHeight, 0) || 0
    let width = Math.max(options.width, 0) || naturalWidth
    let height = Math.max(options.height, 0) || naturalHeight

    if (maxWidth < Infinity && maxHeight < Infinity) {
      if (maxHeight * aspectRatio > maxWidth) {
        maxHeight = maxWidth / aspectRatio
      } else {
        maxWidth = maxHeight * aspectRatio
      }
    } else if (maxWidth < Infinity) {
      maxHeight = maxWidth / aspectRatio
    } else if (maxHeight < Infinity) {
      maxWidth = maxHeight * aspectRatio
    }

    if (minWidth > 0 && minHeight > 0) {
      if (minHeight * aspectRatio > minWidth) {
        minHeight = minWidth / aspectRatio
      } else {
        minWidth = minHeight * aspectRatio
      }
    } else if (minWidth > 0) {
      minHeight = minWidth / aspectRatio
    } else if (minHeight > 0) {
      minWidth = minHeight * aspectRatio
    }

    if (height * aspectRatio > width) {
      height = width / aspectRatio
    } else {
      width = height * aspectRatio
    }

    width = Math.floor(Math.min(Math.max(width, minWidth), maxWidth))
    height = Math.floor(Math.min(Math.max(height, minHeight), maxHeight))

    let dWidth = width
    let dHeight = height

    if (is90DegreesRotated) {
      temp = dHeight
      dHeight = dWidth
      dWidth = temp
    }

    return {
      dWidth: dWidth,
      dHeight: dHeight,
      width: width,
      height: height
    }
  }

  // 获取转化后的方向信息
  getParsedOrientationInfo(img, callback) {
    let _this = this

    this.getOrientation(img, function (orientation) {
      if (isFunc(callback)) {
        callback(_this.parseOrientation(orientation))
      }
    })
  }

  // 获取方向
  getOrientation(img, callback) {
    EXIF.getData(img, function () {
      let orientation = EXIF.getTag(this, 'Orientation')
      if (isFunc(callback)) {
        callback(orientation)
      }
    })
  }

  // 逆向转化Exif获取到图片的方向信息
  parseOrientation(orientation) {
    let rotate = 0
    let scaleX = 1
    let scaleY = 1

    switch (orientation) {
      // 水平翻转
      case 2:
        scaleX = -1
        break
      // 向左旋转180°
      case 3:
        rotate = -180
        break
      // 垂直翻转
      case 4:
        scaleY = -1
        break
      // 垂直翻转并且向右旋转90°
      case 5:
        rotate = 90
        scaleY = -1
        break
      // 向右旋转90°
      case 6:
        rotate = 90
        break
      // 水平翻转并且向右旋转90°
      case 7:
        rotate = 90
        scaleX = -1
        break
      // 向左旋转90°
      case 8:
        rotate = -90
        break
      default:
        break
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    }
  }

  // 画布上绘制图片前的一些操作：设置画布一些样式，支持用户自定义
  beforeDraw(ctx, canvas) {
    let parsedOrientationInfo = this.parsedOrientationInfo
    let rotate = parsedOrientationInfo.rotate
    let scaleX = parsedOrientationInfo.scaleX
    let scaleY = parsedOrientationInfo.scaleY
    let file = this.file
    let options = this.options
    let fillStyle = 'transparent'
    let width = canvas.width
    let height = canvas.height

    // `png` 格式图片大小超过 `convertSize`, 转化成 `jpeg` 格式
    if (file.size > options.convertSize && options.mimeType === 'image/png') {
      fillStyle = '#fff'
      options.mimeType = 'image/jpeg'
    }

    // 覆盖默认的黑色填充色
    ctx.fillStyle = fillStyle
    ctx.fillRect(0, 0, width, height)

    // 用户自定义画布样式
    if (isFunc(options.beforeDraw)) {
      options.beforeDraw.call(this, ctx, canvas)
    }

    ctx.save()

    switch (rotate) {
      case 90:
        ctx.translate(width, 0)
        break
      case -90:
        ctx.translate(0, height)
        break
      case -180:
        ctx.translate(width, height)
        break
    }

    ctx.rotate((rotate * Math.PI) / 180)
    ctx.scale(scaleX, scaleY)
  }

  // 画布上绘制图片后的一些操作：支持用户自定义
  afterDraw(ctx, canvas) {
    let options = this.options
    // 用户自定义画布样式
    if (isFunc(options.afterDraw)) {
      options.afterDraw.call(this, ctx, canvas)
    }
  }

  // 错误触发函数
  error(msg) {
    let options = this.options
    if (isFunc(options.error)) {
      options.error.call(this, msg)
    } else {
      throw new Error(msg)
    }
  }

  // 成功触发函数
  success(result) {
    let options = this.options
    let file = this.file
    let image = this.image
    let edge = this.getExpectedEdge()
    let naturalHeight = image.naturalHeight
    let naturalWidth = image.naturalWidth

    if (result && result.size) {
      // 在非宽松模式下，用户期待的输出宽高没有大于源图片的宽高情况下，输出文件大小大于源文件，返回源文件
      if (!options.loose && result.size > file.size && !(
        edge.width > naturalWidth
        || edge.height > naturalHeight
      )) {
        console.warn('当前设置的是非宽松模式，压缩结果大于源图片，输出源图片')
        result = file
      } else {
        const date = new Date()

        result.lastModified = date.getTime()
        result.lastModifiedDate = date
        result.name = file.name

        // 文件 `name` 属性中的后缀转化成实际后缀
        if (result.name && result.type !== file.type) {
          result.name = result.name.replace(
            REGEXP_EXTENSION,
            imageTypeToExtension(result.type)
          )
        }
      }
    } else {
      // 在某些情况下压缩后文件为 `null`，返回源文件
      console.warn('图片压缩出了点意外，输出源图片')
      result = file
    }

    if (isFunc(options.success)) {
      options.success.call(this, result)
    }
  }
}

for (let key in util) {
  if (util.hasOwnProperty(key)) {
    ImageCompress[key] = util[key]
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCompress);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});