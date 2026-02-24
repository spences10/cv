import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { check_rate_limit } from './rate-limit';

describe('check_rate_limit', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should allow requests under the limit', () => {
		expect(check_rate_limit('1.2.3.4')).toBe(true);
	});

	it('should allow up to 10 requests per minute', () => {
		for (let i = 0; i < 10; i++) {
			expect(check_rate_limit('10.0.0.1')).toBe(true);
		}
	});

	it('should block the 11th request within a minute', () => {
		for (let i = 0; i < 10; i++) {
			check_rate_limit('10.0.0.2');
		}
		expect(check_rate_limit('10.0.0.2')).toBe(false);
	});

	it('should track IPs independently', () => {
		for (let i = 0; i < 10; i++) {
			check_rate_limit('10.0.0.3');
		}
		expect(check_rate_limit('10.0.0.3')).toBe(false);
		expect(check_rate_limit('10.0.0.4')).toBe(true);
	});

	it('should allow requests again after the window expires', () => {
		for (let i = 0; i < 10; i++) {
			check_rate_limit('10.0.0.5');
		}
		expect(check_rate_limit('10.0.0.5')).toBe(false);

		vi.advanceTimersByTime(60_001);

		expect(check_rate_limit('10.0.0.5')).toBe(true);
	});

	it('should use a sliding window', () => {
		// Send 5 requests at t=0
		for (let i = 0; i < 5; i++) {
			check_rate_limit('10.0.0.6');
		}

		// Advance 30s, send 5 more
		vi.advanceTimersByTime(30_000);
		for (let i = 0; i < 5; i++) {
			check_rate_limit('10.0.0.6');
		}

		// At t=30s, all 10 in window — blocked
		expect(check_rate_limit('10.0.0.6')).toBe(false);

		// Advance to t=61s — first 5 expire
		vi.advanceTimersByTime(31_000);
		expect(check_rate_limit('10.0.0.6')).toBe(true);
	});
});
