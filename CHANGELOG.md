## 3.4.0

* Added README files to all patches
* Added to [Rainycolor Watercolor](https://rainy.patafour.zip/package/7EVENDAYSHOLIDAYS/Mu3Mods/)

## 3.3.1

* SkipCutscenes: fixed the pre-music ritual skip removing card info from the bottom of the screen

## 3.3.0

* UnlockGameEvents: fixed/reworked monthly mission events.
  * If the server is properly configured, and there is only one valid active mission, then that mission is chosen.
  * Otherwise, all missions are unlocked and will iterate from latest to oldest.
    * A mission is considered complete once you unlock all rewards and enter a loop (typically 25,000mp).
  * Note that Artemis enables all missions by default. If multiple monthly missions are active, the vanilla game chooses the first one. This is why your mission events may have been stuck on [bright memory's oldest mission](https://wikiwiki.jp/gameongeki/%E3%83%9E%E3%83%B3%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%9F%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%882022%E5%B9%B43%E6%9C%88%EF%BC%89).
    * If you want to enable a specific mission, make sure only that mission is active at the present time in `ongeki_static_events` (`where type=13`).
* Fixed various edgecase issues.

## 3.2.0

* ExclusiveAudio: added to `fixes`.
  * Allows for sample rates other than 48KHz (in exclusive mode).
  * Adds an option to use 2-channel audio instead of 6-channel.

## 3.1.0

* AttractVideoPlayer: left red button can now be used to skip attract video.
* SkipCutscenes: added a skip for the continue prompt.  * Can be enabled in the mod test menu or `[Sequence] AutoContinue=1`.
* SkipCutscenes: fixed being able to skip after the play was restarted after the player had died.
* BetterGiveUp: removed the "continue?" popup that briefly showed up after giving up.
* BetterGiveUp: yeet.

## 3.0.1

* SkipCutscenes: fixed the post-game skip not working when FC/AB/FB was not achieved.

For older changelogs, see [the releases page](https://gitea.tendokyu.moe/akanyan/mu3-mods/releases)