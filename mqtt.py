import json
import paho.mqtt.client as mqtt

BROKER = "133.36.93.254"

SENSOR_TOPIC = "iot/raspi5/room1/sensor"
ALERT_TOPIC  = "iot/raspi/room1/alert"

# 接続成功時
def on_connect(client, userdata, flags, reason_code, properties=None):
    print("Connected with result code:", reason_code)

    # 両方のトピックを購読
    client.subscribe(SENSOR_TOPIC)
    client.subscribe(ALERT_TOPIC)
    print("Subscribed to topics")

# メッセージ受信時
def on_message(client, userdata, msg):
    try:
        data = json.loads(msg.payload.decode())

        if msg.topic == SENSOR_TOPIC:
            print(f"[SENSOR] T={data['temperature']} H={data['humidity']}")

        elif msg.topic == ALERT_TOPIC:
            print(f"🔥 [ALERT] {data}")

    except Exception as e:
        print("Parse error:", e)

client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)

client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, 1883, 60)

print("MQTT Subscriber started...")
client.loop_forever()