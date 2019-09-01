var manifest = '<?xml version="1.0" encoding="utf-8"?> \
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:cenc="urn:mpeg:cenc:2013" xmlns:hulu="urn:com:hulu:schema:mpd:2015" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011" type="static" minBufferTime="PT5.0S" mediaPresentationDuration="PT2538.953S"> \
  <Period id="Content" start="PT0S" duration="PT2538.953S"> \
      <AssetIdentifier schemeIdUri="urn:com:hulu:asset-id:2016" value="61387667"/> \
      <AdaptationSet mimeType="audio/mp4" segmentAlignment="true" bitstreamSwitching="true" lang="en"> \
          <ContentProtection schemeIdUri="urn:mpeg:dash:mp4protection:2011" value="cenc" cenc:default_KID="a52113b27c9f583ea48836d9f72b6214"/> \
          <ContentProtection schemeIdUri="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"/> \
          <ContentProtection schemeIdUri="urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95"/> \
          <InbandEventStream schemeIdUri="www.nielsen.com:id3:v1" value="1"/> \
          <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/> \
          <Representation id="149071511" codecs="mp4a.40.5" bandwidth="68493"  startWithSAP="1" audioSamplingRate="48000"> \
              <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/> \
              <hulu:Cdn>dv</hulu:Cdn> \
              <BaseURL>https://http-v-darwin.hulustream.com/667/61387667/agave51602250_86315905_H264_1000_86325704_audio.mp4?end=20190824091256&amp;authToken=0ac9224eb5c027a26f8c0</BaseURL> \
              <SegmentBase indexRange="1483-7502" indexRangeExact="true"> \
                  <Initialization range="0-1482"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149071511" codecs="mp4a.40.5" bandwidth="68493"  startWithSAP="1" audioSamplingRate="48000"> \
              <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/> \
              <hulu:Cdn>de</hulu:Cdn> \
              <BaseURL>https://http-e-darwin.hulustream.com/667/61387667/agave51602250_86315905_H264_1000_86325704_audio.mp4?expire=1566637976&amp;token=944f56218a2ffa80fb473d7cb8242fe7</BaseURL> \
              <SegmentBase indexRange="1483-7502" indexRangeExact="true"> \
                  <Initialization range="0-1482"/> \
              </SegmentBase> \
          </Representation> \
      </AdaptationSet> \
      <AdaptationSet mimeType="video/mp4" segmentAlignment="true" bitstreamSwitching="true" maxWidth="704" maxHeight="396"> \
          <ContentProtection schemeIdUri="urn:mpeg:dash:mp4protection:2011" value="cenc" cenc:default_KID="a52113b27c9f583ea48836d9f72b6214"/> \
          <ContentProtection schemeIdUri="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"> \
              <cenc:pssh>AAAASHBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAACgIARIQpSETsnyfWD6kiDbZ9ytiFBoEaHVsdSIINTE2MDIyNTAqAkhE</cenc:pssh> \
          </ContentProtection> \
          <ContentProtection schemeIdUri="urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95"> \
              <cenc:pssh>AAACvHBzc2gAAAAAmgTweZhAQoarkuZb4IhflQAAApycAgAAAQABAJICPABXAFIATQBIAEUAQQBEAEUAUgAgAHgAbQBsAG4AcwA9ACIAaAB0AHQAcAA6AC8ALwBzAGMAaABlAG0AYQBzAC4AbQBpAGMAcgBvAHMAbwBmAHQALgBjAG8AbQAvAEQAUgBNAC8AMgAwADAANwAvADAAMwAvAFAAbABhAHkAUgBlAGEAZAB5AEgAZQBhAGQAZQByACIAIAB2AGUAcgBzAGkAbwBuAD0AIgA0AC4AMAAuADAALgAwACIAPgA8AEQAQQBUAEEAPgA8AFAAUgBPAFQARQBDAFQASQBOAEYATwA+ADwASwBFAFkATABFAE4APgAxADYAPAAvAEsARQBZAEwARQBOAD4APABBAEwARwBJAEQAPgBBAEUAUwBDAFQAUgA8AC8AQQBMAEcASQBEAD4APAAvAFAAUgBPAFQARQBDAFQASQBOAEYATwA+ADwASwBJAEQAPgBzAGgATQBoAHAAWgA5ADgAUABsAGkAawBpAEQAYgBaADkAeQB0AGkARgBBAD0APQA8AC8ASwBJAEQAPgA8AEMASABFAEMASwBTAFUATQA+AE4AYwBzAG0ASwBJAFIALwA5AHcAYwA9ADwALwBDAEgARQBDAEsAUwBVAE0APgA8AEMAVQBTAFQATwBNAEEAVABUAFIASQBCAFUAVABFAFMAPgA8AC8AQwBVAFMAVABPAE0AQQBUAFQAUgBJAEIAVQBUAEUAUwA+ADwATABBAF8AVQBSAEwAPgBoAHQAdABwAHMAOgAvAC8AcABsAGEAeQAuAGgAdQBsAHUALgBjAG8AbQA8AC8ATABBAF8AVQBSAEwAPgA8AC8ARABBAFQAQQA+ADwALwBXAFIATQBIAEUAQQBEAEUAUgA+AA==</cenc:pssh> \
          </ContentProtection> \
          <Representation id="149071511" codecs="avc1.64001E" bandwidth="1276836"  startWithSAP="1" width="704" height="396" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>1000</hulu:ProfileBandwidth> \
              <hulu:Cdn>dv</hulu:Cdn> \
              <BaseURL>https://http-v-darwin.hulustream.com/667/61387667/agave51602250_86315905_H264_1000_86325704_video.mp4?end=20190824091256&amp;authToken=00f0183a306823a2e45be</BaseURL> \
              <SegmentBase indexRange="1540-7703" indexRangeExact="true"> \
                  <Initialization range="0-1539"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149071511" codecs="avc1.64001E" bandwidth="1276836"  startWithSAP="1" width="704" height="396" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>1000</hulu:ProfileBandwidth> \
              <hulu:Cdn>de</hulu:Cdn> \
              <BaseURL>https://http-e-darwin.hulustream.com/667/61387667/agave51602250_86315905_H264_1000_86325704_video.mp4?expire=1566637976&amp;token=674bd78fa3712976ba77a087022d08f4</BaseURL> \
              <SegmentBase indexRange="1540-7703" indexRangeExact="true"> \
                  <Initialization range="0-1539"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149069393" codecs="avc1.640015" bandwidth="463984"  startWithSAP="1" width="512" height="288" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>400</hulu:ProfileBandwidth> \
              <hulu:Cdn>dv</hulu:Cdn> \
              <BaseURL>https://http-v-darwin.hulustream.com/667/61387667/agave51602250_86315903_H264_400_86323468_video.mp4?end=20190824091256&amp;authToken=0f2987215fc8808f4b3ee</BaseURL> \
              <SegmentBase indexRange="1540-7703" indexRangeExact="true"> \
                  <Initialization range="0-1539"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149069393" codecs="avc1.640015" bandwidth="463984"  startWithSAP="1" width="512" height="288" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>400</hulu:ProfileBandwidth> \
              <hulu:Cdn>de</hulu:Cdn> \
              <BaseURL>https://http-e-darwin.hulustream.com/667/61387667/agave51602250_86315903_H264_400_86323468_video.mp4?expire=1566637976&amp;token=4ed8cd3cbb2fd42515f9b76c24b64e7f</BaseURL> \
              <SegmentBase indexRange="1540-7703" indexRangeExact="true"> \
                  <Initialization range="0-1539"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149071211" codecs="avc1.64001E" bandwidth="810427"  startWithSAP="1" width="640" height="360" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>650</hulu:ProfileBandwidth> \
              <hulu:Cdn>dv</hulu:Cdn> \
              <BaseURL>https://http-v-darwin.hulustream.com/667/61387667/agave51602250_86315904_H264_650_86325399_video.mp4?end=20190824091256&amp;authToken=026a58a391024dc110b4e</BaseURL> \
              <SegmentBase indexRange="1541-7704" indexRangeExact="true"> \
                  <Initialization range="0-1540"/> \
              </SegmentBase> \
          </Representation> \
          <Representation id="149071211" codecs="avc1.64001E" bandwidth="810427"  startWithSAP="1" width="640" height="360" frameRate="24000/1001"> \
              <hulu:ProfileBandwidth>650</hulu:ProfileBandwidth> \
              <hulu:Cdn>de</hulu:Cdn> \
              <BaseURL>https://http-e-darwin.hulustream.com/667/61387667/agave51602250_86315904_H264_650_86325399_video.mp4?expire=1566637976&amp;token=c7baa3aa3a8af3b4237d46527a9dee40</BaseURL> \
              <SegmentBase indexRange="1541-7704" indexRangeExact="true"> \
                  <Initialization range="0-1540"/> \
              </SegmentBase> \
          </Representation> \
      </AdaptationSet> \
  </Period> \
</MPD> \
'
export default manifest;
