// source: student.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.students.bulk');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.students.Student');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.students.bulk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.students.bulk.repeatedFields_, null);
};
goog.inherits(proto.students.bulk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.students.bulk.displayName = 'proto.students.bulk';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.students.bulk.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.students.bulk.prototype.toObject = function(opt_includeInstance) {
  return proto.students.bulk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.students.bulk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.students.bulk.toObject = function(includeInstance, msg) {
  var f, obj = {
    arraydataList: jspb.Message.toObjectList(msg.getArraydataList(),
    proto.students.Student.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.students.bulk}
 */
proto.students.bulk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.students.bulk;
  return proto.students.bulk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.students.bulk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.students.bulk}
 */
proto.students.bulk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.students.Student;
      reader.readMessage(value,proto.students.Student.deserializeBinaryFromReader);
      msg.addArraydata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.students.bulk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.students.bulk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.students.bulk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.students.bulk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArraydataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.students.Student.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Student arrayData = 1;
 * @return {!Array<!proto.students.Student>}
 */
proto.students.bulk.prototype.getArraydataList = function() {
  return /** @type{!Array<!proto.students.Student>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.students.Student, 1));
};


/**
 * @param {!Array<!proto.students.Student>} value
 * @return {!proto.students.bulk} returns this
*/
proto.students.bulk.prototype.setArraydataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.students.Student=} opt_value
 * @param {number=} opt_index
 * @return {!proto.students.Student}
 */
proto.students.bulk.prototype.addArraydata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.students.Student, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.students.bulk} returns this
 */
proto.students.bulk.prototype.clearArraydataList = function() {
  return this.setArraydataList([]);
};

